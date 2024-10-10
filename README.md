# WorkforcePro

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Go Version](https://img.shields.io/badge/Go-1.19-blue.svg)](https://golang.org/doc/go1.19)
[![Testify](https://img.shields.io/badge/Testify-Unit%20Testing-blue.svg)](https://github.com/stretchr/testify)
[![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Gin Framework](https://img.shields.io/badge/Gin-1.7.7-red.svg)](https://gin-gonic.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4.x-green.svg)](https://www.mongodb.com/)
[![GORM](https://img.shields.io/badge/GORM-1.22-blue.svg)](https://gorm.io/)
[![SMTP](https://img.shields.io/badge/SMTP-Email%20Service-blue.svg)](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
[![bcrypt](https://img.shields.io/badge/bcrypt-Password%20Hashing-orange.svg)](https://github.com/golang/crypto/blob/master/bcrypt/bcrypt.go)
[![Unit Testing](https://img.shields.io/badge/Unit%20Testing-Passed-brightgreen.svg)](https://en.wikipedia.org/wiki/Unit_testing)
[![REST API](https://img.shields.io/badge/RESTful-API-lightgrey.svg)](https://en.wikipedia.org/wiki/Representational_state_transfer)
[![HTML](https://img.shields.io/badge/HTML5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.0-blue.svg)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> A full-stack employee management system built using **Golang**, **React**, and **MongoDB** with role-based access control, email notifications, and employee management.

## Demo Login page

![image](https://github.com/user-attachments/assets/322e5706-f056-48e2-9fec-2a82cc990309)

## Demo Dashboard page

![image](https://github.com/user-attachments/assets/c5f83ccf-4d67-4237-a72b-aa1c73226db2)

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features

### 🛠️ Employee Management

- **Add Employees**: Input information like name, role, gender, nationality, email, etc.
- **View Employees**: View a list of all employees in a grid-based layout.
- **Email Notifications**: Employees receive login credentials via email upon registration.
- **Auto-Generated Employee ID**: Employee ID is automatically generated based on the first two letters from the employee's first name and last name, followed by a random 4-digit number.
- **Auto-Generated Password** : A secure, random 10-character password is automatically generated for each employee and included in the email.

### 🛡️ Role-Based Access Control

- **HR Role**: Can add and manage employees, view dashboards, and manage tasks.
- **Employee Role**: Can log in and view their individual dashboard with relevant information.

### 📧 Automatic Email Notifications

- When an employee is added, they automatically receive a welcome email with their login credentials.

### 📊 MongoDB Integration

- All employee data is saved to MongoDB, ensuring a scalable and flexible database solution.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS for styling, Axios for API calls.
- **Backend**: Go with the Gin framework for building RESTful APIs, SMTP for email sending.
- **Database**: MongoDB to store employee data and user credentials.
- **Testing**: Testify and mtest for unit testing.

---

## Testing

We have implemented unit tests for the **login handler** using **Testify** and **mtest**. The tests ensure that the login functionality works correctly by interacting with a mock MongoDB collection.

### Key Points:

- **Testify**: Used for assertions in the unit tests, simplifying test comparisons and validations.
- **mtest**: Mock MongoDB tests that simulate database operations like fetching and decoding user data from the `users` collection.

## Performance Testing with k6

We performed load testing on the `login` endpoint of WorkforcePro using **k6** to evaluate how the system performs under load.

### **Test Setup**:

- **Virtual Users (VUs)**: 100
- **Duration**: 30 seconds
- **Endpoint Tested**: `/login`
- **Test Tool**: [k6](https://k6.io/)

### **Metrics Summary**:

- **Total Requests**: 2,884
- **Average Response Time**: 55.07ms
- **Median Response Time**: 40.95ms
- **90th Percentile Response Time**: 57.21ms
- **95th Percentile Response Time**: 75.48ms
- **Success Rate**: 100% (No failed requests)

---

## Setup Instructions

### Prerequisites

- **Go**: Ensure Go is installed (version 1.19 or later). [Download Go](https://golang.org/dl/)
- **Node.js**: Install Node.js (version 18.x or later). [Download Node.js](https://nodejs.org/)
- **MongoDB**: Set up MongoDB as your database. [MongoDB Setup](https://docs.mongodb.com/manual/installation/)
- **Golang Gin**: Ensure you have installed the Gin framework. `go get github.com/gin-gonic/gin`

## Project Structure

```bash
WorkforcePro/
├── backend/                  # Go backend code
│   ├── main.go               # Main Go file with routes and logic
│   └── go.mod                # Module dependencies for Golang
├── frontend/                 # React frontend code
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js  # Dashboard component
│   │   │   ├── Employees.js  # Employee management component
│   │   │   └── Sidebar.js    # Sidebar component with navigation
│   ├── public/
│   └── package.json          # Project dependencies
└── README.md                 # Project documentation (this file)

```
