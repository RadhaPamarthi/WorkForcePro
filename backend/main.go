// main.go
package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Connect to MongoDB

	router := gin.Default()

	// Configure CORS middleware
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept"}

	router.Use(cors.New(config))

	// Routes
	router.POST("/login", login)
	router.POST("/add-employee", addEmployee)

	// Start the server on port 8080
	log.Println("Server starting on :8080")
	router.Run(":8080")
}
