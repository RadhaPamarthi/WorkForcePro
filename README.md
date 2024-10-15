# **WorkforcePro** 🚀

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
[![Swagger](https://img.shields.io/badge/Swagger-API%20Documentation-green.svg)](https://swagger.io/)

WorkforcePro is a powerful, full-stack employee management system built using **Golang**, **React**, and **MongoDB**. It offers a comprehensive set of features, including role-based access control, email notifications, and seamless employee management.

## 🌟 Demo

### Login Page

![Login Page](https://github.com/user-attachments/assets/322e5706-f056-48e2-9fec-2a82cc990309)

### Dashboard

![Dashboard](https://github.com/user-attachments/assets/c5f83ccf-4d67-4237-a72b-aa1c73226db2)

## 📋 Table of Contents

- [Features](#features)
  - [Employee Management](#employee-management)
  - [Role-Based Access Control](#role-based-access-control)
  - [Automatic Email Notifications](#automatic-email-notifications)
  - [MongoDB Integration](#mongodb-integration)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  - [Unit Testing](#unit-testing)
  - [Performance Testing with k6](#performance-testing-with-k6)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## 🌟 Features

### 🛠️ Employee Management

- **Add Employees**: Easily input employee information such as name, role, gender, nationality, email, and more.
- **View Employees**: Access a comprehensive list of all employees in a user-friendly grid-based layout.
- **Email Notifications**: Employees automatically receive their login credentials via email upon registration.
- **Auto-Generated Employee ID**: Each employee is assigned a unique ID based on the first two letters of their first and last name, followed by a random 4-digit number.
- **Auto-Generated Password**: WorkforcePro generates a secure, random 10-character password for each employee, which is included in their welcome email.

### 🔐 Role-Based Access Control

- **HR Role**: HR personnel have the ability to add and manage employees, view dashboards, and assign tasks.
- **Employee Role**: Employees can log in and access their personalized dashboard with relevant information.

### 📧 Automatic Email Notifications

- Whenever a new employee is added to the system, they automatically receive a welcome email containing their login credentials.

### 🍃 MongoDB Integration

- WorkforcePro utilizes MongoDB to store all employee data, ensuring a scalable and flexible database solution.

## 🛠️ Technologies Used

- **Frontend**: React for building interactive user interfaces, Tailwind CSS for easy and efficient styling, and Axios for seamless API communication.
- **Backend**: Go with the powerful Gin framework for building robust RESTful APIs, and SMTP for reliable email sending functionality.
- **Database**: MongoDB, a NoSQL database, is used to store employee data and user credentials, providing scalability and flexibility.
- **Testing**: Testify and mtest are employed for comprehensive unit testing to ensure code reliability.

## 🧪 Testing

### Unit Testing

WorkforcePro includes unit tests for the **login handler** using the powerful **Testify** and **mtest** libraries. These tests ensure the correctness of the login functionality by interacting with a mock MongoDB collection.

- **Testify**: Simplifies test comparisons and validations through its assertion functions.
- **mtest**: Enables the creation of mock MongoDB tests to simulate database operations, such as fetching and decoding user data from the `users` collection.

### Performance Testing with k6

To evaluate the performance of WorkforcePro under load, we conducted load testing on the `login` endpoint using **k6**, a modern load testing tool.

**Test Setup**:

- **Virtual Users (VUs)**: 100
- **Duration**: 30 seconds
- **Endpoint Tested**: `/login`
- **Test Tool**: [k6](https://k6.io/)

**Metrics Summary**:

- **Total Requests**: 2,884
- **Average Response Time**: 55.07ms
- **Median Response Time**: 40.95ms
- **90th Percentile Response Time**: 57.21ms
- **95th Percentile Response Time**: 75.48ms
- **Success Rate**: 100% (No failed requests)

These results demonstrate the excellent performance and reliability of WorkforcePro under high-load scenarios.

## 📝 API Documentation

WorkforcePro uses [Swagger](https://swagger.io/) for API documentation. Swagger provides an interactive and user-friendly interface to explore and test the available API endpoints.

To access the Swagger documentation:

1. Run the backend server: `go run main.go`
2. Open your browser and visit: `http://localhost:8080/swagger/index.html`

The Swagger documentation provides detailed information about each API endpoint, including request/response formats, authentication requirements, and example requests.

## 📁 Project Structure

```bash
WorkforcePro/
├── backend/                     # Go backend code
│   ├── main.go                  # Main Go file with routes and logic
│   ├── go.mod                   # Module dependencies for Golang
│   └── docs/                    # Swagger API documentation
│       ├── docs.go              # Swagger API documentation code
│       └── swagger.json         # Swagger API specification
├── frontend/                    # React frontend code
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js     # Dashboard component
│   │   │   ├── Employees.js     # Employee management component
│   │   │   └── Sidebar.js       # Sidebar component with navigation
│   ├── public/
│   └── package.json             # Project dependencies
└── README.md                    # Project documentation (this file)
```

## 🚀 Setup Instructions

### Prerequisites
- **Go**: Ensure Go is installed (version 1.19 or later). [Download Go](https://golang.org/dl/)
- **Node.js**: Install Node.js (version 18.x or later). [Download Node.js](https://nodejs.org/)
- **MongoDB**: Set up MongoDB as your database. [MongoDB Setup](https://docs.mongodb.com/manual/installation/)
- **Golang Gin**: Ensure you have installed the Gin framework.  
  ```bash
  go get github.com/gin-gonic/gin




