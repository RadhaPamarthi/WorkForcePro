package main

import (
	"fmt"
	"log"
	"net/http"
	"net/smtp"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Configure CORS middleware
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept"}

	// Apply CORS middleware to the router
	router.Use(cors.New(config))

	// Routes
	router.POST("/login", login)
	router.POST("/add-employee", addEmployee)

	// Start the server on port 8080
	log.Println("Server starting on :8080")
	router.Run(":8080")
}

// Login handler to receive JSON data from the front end
func login(c *gin.Context) {
	var creds User
	log.Println("Receiving login request")

	// Bind JSON data from the request body to the User struct
	if err := c.ShouldBindJSON(&creds); err != nil {
		log.Println("Invalid request payload:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	log.Printf("Received credentials: username=%s\n", creds.Username)

	// Check credentials
	if creds.Username == "admin@gmail.com" && creds.Password == "password123" {
		log.Println("Login successful")
		c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
	} else {
		log.Println("Invalid username or password")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
	}
}

// User struct for login credentials
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// Employee struct for employee registration
type Employee struct {
	FirstName   string `json:"firstName"`
	LastName    string `json:"lastName"`
	Email       string `json:"email"`
	DOB         string `json:"dob"`
	Role        string `json:"role"`
	Gender      string `json:"gender"`
	Nationality string `json:"nationality"`
	PhoneNumber string `json:"phoneNumber"`
}

// addEmployee handler to receive employee data and send a welcome email
func addEmployee(c *gin.Context) {
	var newEmployee Employee
	log.Println("Receiving new employee registration")

	// Bind JSON data from the request body to the Employee struct
	if err := c.ShouldBindJSON(&newEmployee); err != nil {
		log.Println("Invalid request payload:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// Log the received employee data in the terminal
	log.Printf("Received employee details: %+v\n", newEmployee)

	// Send welcome email
	err := sendWelcomeEmail(newEmployee.Email, newEmployee.FirstName)
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

// sendWelcomeEmail sends a welcome email to the new employee
func sendWelcomeEmail(toEmail, firstName string) error {
	// Set up the email details
	from := "iamradha0246@gmail.com"  // Replace with your email
	password := "mgme okhl fsbx hxjl" // Replace with your email password
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	// Message to send
	subject := "Welcome to the Company"
	body := fmt.Sprintf("Hello %s,\n\nWelcome to our company! We're excited to have you on board.\n\nBest Regards,\nYour Company Team", firstName)
	message := fmt.Sprintf("Subject: %s\r\n\r\n%s", subject, body)

	// Set up authentication information
	auth := smtp.PlainAuth("", from, password, smtpHost)

	log.Println("Starting to send welcome email...")

	// Send email
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{toEmail}, []byte(message))
	if err != nil {
		log.Printf("Error while sending email to %s: %v", toEmail, err)
		return fmt.Errorf("failed to send welcome email to %s: %w", toEmail, err)
	}

	log.Printf("Welcome email sent successfully to: %s", toEmail)
	return nil
}
