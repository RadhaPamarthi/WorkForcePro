package main

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Define the Employee struct to match MongoDB document structure
// type Employee struct {
// 	EmployeeID  string `json:"employeeID" bson:"employeeID"`
// 	FirstName   string `json:"firstName" bson:"firstName"`
// 	LastName    string `json:"lastName" bson:"lastName"`
// 	Email       string `json:"email" bson:"email"`
// 	DOB         string `json:"dob" bson:"dob"`
// 	Role        string `json:"role" bson:"role"`
// 	Gender      string `json:"gender" bson:"gender"`
// 	Nationality string `json:"nationality" bson:"nationality"`
// 	PhoneNumber string `json:"phoneNumber" bson:"phoneNumber"`
// 	Password    string `json:"password" bson:"password"` // Auto-generated password
// }

// Define the User struct for login
type User struct {
	Email    string `json:"email" bson:"email"`
	Password string `json:"password" bson:"password"`
}

// MongoDB client setup (global variable)
var client *mongo.Client

// Init function to connect to MongoDB
func init() {
	uri := "mongodb+srv://iamradha0246:IcrOVusDHSrGh0X2@cluster0.rhzjo.mongodb.net/?retryWrites=true&w=majority"

	// Create MongoDB client and connect
	clientOptions := options.Client().ApplyURI(uri).SetMaxPoolSize(100).SetServerSelectionTimeout(30 * time.Second).SetConnectTimeout(10 * time.Second).SetSocketTimeout(30 * time.Second)
	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()

	var err error
	client, err = mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("Failed to connect to MongoDB: %v", err)
	}

	// Ping MongoDB to check the connection
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("Failed to ping MongoDB: %v", err)
	}

	log.Println("Successfully connected to MongoDB!")
}

// Login handler to fetch user data from MongoDB and check credentials
func login(c *gin.Context) {
	var creds User
	log.Println("Receiving login request")

	// Bind JSON data from the request body to the User struct
	if err := c.ShouldBindJSON(&creds); err != nil {
		log.Println("Invalid request payload:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	log.Printf("Received credentials: email=%s\n", creds.Email)

	// Connect to MongoDB collection
	collection := client.Database("WorkforcePro").Collection("users")

	// Find user by email (case-insensitive)
	var storedUser User
	err := collection.FindOne(context.TODO(), bson.M{
		"email": bson.M{
			"$regex":   creds.Email,
			"$options": "i", // Case-insensitive option
		},
	}).Decode(&storedUser)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Println("No document found for this email")
		} else {
			log.Printf("Error decoding document: %v\n", err)
		}
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
		return
	}

	// Check if the provided password matches the one in the database
	if creds.Password == storedUser.Password {
		log.Println("Login successful")
		c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
	} else {
		log.Println("Invalid password")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
	}
}

// Handler to add employee details
func addEmployee(c *gin.Context) {
	var newEmployee Employee
	log.Println("Receiving new employee registration")

	// Bind JSON data from the request body to the Employee struct
	if err := c.ShouldBindJSON(&newEmployee); err != nil {
		log.Println("Invalid request payload:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// Generate Employee ID and Password
	newEmployee.EmployeeID = generateEmployeeID(newEmployee.FirstName, newEmployee.LastName)
	newEmployee.Password = generatePassword(10)

	// Log the generated employee data
	log.Printf("Generated Employee ID: %s", newEmployee.EmployeeID)
	log.Printf("Generated Password: %s", newEmployee.Password)
	log.Printf("Received employee details: %+v\n", newEmployee)

	// Connect to MongoDB collection
	collection := client.Database("WorkforcePro").Collection("users")

	// Insert employee data into MongoDB
	_, err := collection.InsertOne(context.TODO(), newEmployee)
	if err != nil {
		log.Println("Failed to insert employee into MongoDB:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add employee"})
		return
	}

	// Send welcome email with Employee ID and password
	err = sendWelcomeEmail(newEmployee.Email, newEmployee.FirstName, newEmployee.EmployeeID, newEmployee.Password)
	if err != nil {
		log.Println("Failed to send welcome email:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to send welcome email"})
		return
	}

	// Respond with success
	c.JSON(http.StatusOK, gin.H{
		"message":  "Employee added and email sent successfully",
		"employee": newEmployee,
	})
}
