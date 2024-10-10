package main

import (
	"context"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/integration/mtest"
)

func TestLoginHandler(t *testing.T) {
	// Initialize mtest to mock MongoDB
	mt := mtest.New(t, mtest.NewOptions().ClientType(mtest.Mock))

	// Start test cases using mtest.Run
	mt.Run("successful login", func(mt *mtest.T) {
		// Insert a mock user into the mock MongoDB collection
		mt.AddMockResponses(mtest.CreateSuccessResponse())

		collection := mt.Client.Database("WorkforcePro").Collection("users")
		_, err := collection.InsertOne(context.TODO(), bson.M{
			"email":    "admin@gmail.com",
			"password": "password123",
		})
		assert.Nil(t, err)

		// Create a mock Gin HTTP request
		body := `{"email": "admin@gmail.com", "password": "password123"}`
		req, _ := http.NewRequest("POST", "/login", strings.NewReader(body))
		req.Header.Set("Content-Type", "application/json")

		// Record the HTTP response
		rr := httptest.NewRecorder()
		router := gin.Default()
		router.POST("/login", login)
		router.ServeHTTP(rr, req)

		// Validate response
		assert.Equal(t, http.StatusOK, rr.Code)
		assert.Contains(t, rr.Body.String(), "Login successful")
	})
}
