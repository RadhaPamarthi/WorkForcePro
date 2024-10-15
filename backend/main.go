// main.go
package main

import (
	"log"

	_ "radhallc/docs" // Import generated Swagger docs

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files" // Correct import for Swagger files
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title WorkforcePro API
// @version 1.0
// @description This is the API documentation for WorkforcePro application.
// @host localhost:8080
// @BasePath /
func main() {
	// Create a Gin router
	router := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept"}

	router.Use(cors.New(config))

	// Routes
	router.POST("/login", login)
	router.POST("/add-employee", addEmployee)

	// Swagger route
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// Start the server
	log.Println("Server running on :8080")
	router.Run(":8080")
}


//http://localhost:8080/swagger/index.html#/