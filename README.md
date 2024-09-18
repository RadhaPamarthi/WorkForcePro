# WorkforcePro

WorkforcePro is a full-stack employee management system built with a React frontend and a Go (Golang) backend. It allows you to manage employee information, roles, and privileges. It features role-based access controls for HR and Employees, and it provides automatic email notifications for new employees upon their registration.

## Features

### 1. Employee Management
- Add new employees with relevant fields like First Name, Last Name, Email, Date of Birth, Gender, Nationality, Phone Number, and Role.
- Displays a list of all employees.
- Automatically generates a login password for the employee upon registration, and emails them their credentials.
- Provides role-based access (HR vs Employees) with separate dashboards for each role.
  
### 2. Role-Based Access Control
- HR users have administrative rights to manage employee information, payroll, and tasks.
- Employees can log in to view their personal dashboard and details.
- Separate dashboards for HR and Employees.

### 3. Email Notifications
- Sends a welcome email to new employees upon registration with their login credentials using Gmail SMTP.
- Email handling implemented via Go's `net/smtp` package.
  
### 4. MongoDB Database Integration
- Employee details and login credentials are stored in MongoDB.
  
## Technologies Used

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Axios**: For making API calls to the backend.

### Backend
- **Golang**: The backend is powered by the Go programming language using the Gin framework.
- **Gin**: A web framework for handling HTTP routes, middleware, and requests.
- **SMTP**: To send emails via Gmail.
- **MongoDB**: For storing employee data and credentials.

## Project Structure
WorkforcePro/ │ ├── backend/ # Go backend code │ ├── main.go # Main Go file with routes and logic │ └── go.mod # Module dependencies for Golang │ ├── frontend/ # React frontend code │ ├── src/ │ │ ├── components/ │ │ │ ├── Dashboard.js # Dashboard component │ │ │ ├── Employees.js # Employee management component │ │ │ └── Sidebar.js # Sidebar component with navigation │ ├── public/ │ └── package.json # Project dependencies │ └── README.md
