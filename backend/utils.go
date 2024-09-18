// utils.go
package main

import (
	"crypto/rand"
	"fmt"
	"math/big"
	"strings"
)

// Generate a unique employee ID with first 4 letters from the employee's name
// and a 4-digit random number, totaling 8 characters.
func generateEmployeeID(firstName, lastName string) string {
	// Take first two letters of first name and last name
	prefix := (firstName + lastName)[:4]

	// Generate a 4-digit random number
	randomNum, _ := rand.Int(rand.Reader, big.NewInt(10000))

	return strings.ToUpper(prefix) + fmt.Sprintf("%04d", randomNum)
}

// Generate a random password with the specified length
func generatePassword(length int) string {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	password := make([]byte, length)
	for i := range password {
		randomByte, _ := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		password[i] = charset[randomByte.Int64()]
	}
	return string(password)
}
