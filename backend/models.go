// models.go
package main

// User struct for login credentials
// type User struct {
// 	Username string `json:"username"`
// 	Password string `json:"password"`
// }

// Employee struct for employee registration
type Employee struct {
	EmployeeID  string `json:"employeeID"`
	FirstName   string `json:"firstName"`
	LastName    string `json:"lastName"`
	Email       string `json:"email"`
	DOB         string `json:"dob"`
	Role        string `json:"role"`
	Gender      string `json:"gender"`
	Nationality string `json:"nationality"`
	PhoneNumber string `json:"phoneNumber"`
	Password    string `json:"password"`
}
