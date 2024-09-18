// handlers.go
package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

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

// addEmployee handler to receive employee data, generate employee ID and password, and send a welcome email
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

	// Log the generated employee data in the terminal
	log.Printf("Generated Employee ID: %s", newEmployee.EmployeeID)
	log.Printf("Generated Password: %s", newEmployee.Password)
	log.Printf("Received employee details: %+v\n", newEmployee)

	// Send welcome email with Employee ID and Password
	err := sendWelcomeEmail(newEmployee.Email, newEmployee.FirstName, newEmployee.EmployeeID, newEmployee.Password)
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
