import React, { useState } from 'react';
import axios from 'axios';

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      dob: '1990-01-01',
      role: 'Software Engineer',
      gender: 'Male',
      nationality: 'American',
      phoneNumber: '123-456-7890'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      dob: '1988-05-15',
      role: 'Product Manager',
      gender: 'Female',
      nationality: 'Canadian',
      phoneNumber: '987-654-3210'
    }
  ]);

  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    role: '',
    gender: '',
    nationality: '',
    phoneNumber: ''
  });

  // Function to add new employee
  const handleAddEmployee = () => {
    if (
      newEmployee.firstName &&
      newEmployee.lastName &&
      newEmployee.email &&
      newEmployee.dob &&
      newEmployee.role &&
      newEmployee.gender &&
      newEmployee.nationality &&
      newEmployee.phoneNumber
    ) {
      // Send the employee data to the backend using Axios
      axios.post('http://localhost:8080/add-employee', newEmployee)
        .then((response) => {
          // If the backend responds with success, update the employees state
          setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
          setNewEmployee({
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            role: '',
            gender: '',
            nationality: '',
            phoneNumber: ''
          });
          setShowAddEmployeeForm(false);
          alert('Employee added successfully!');
        })
        .catch((error) => {
          console.error('Error adding employee:', error);
          alert('Failed to add employee');
        });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>

      {/* Add Employee Button */}
      <button
        onClick={() => setShowAddEmployeeForm(!showAddEmployeeForm)}
        className="mb-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        {showAddEmployeeForm ? 'Cancel' : 'Add Employee'}
      </button>

      {/* Add Employee Form */}
      {showAddEmployeeForm && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Add New Employee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={newEmployee.firstName}
              onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={newEmployee.lastName}
              onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email ID"
              value={newEmployee.email}
              onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={newEmployee.dob}
              onChange={(e) => setNewEmployee({ ...newEmployee, dob: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="Role"
              value={newEmployee.role}
              onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <select
              value={newEmployee.gender}
              onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Nationality"
              value={newEmployee.nationality}
              onChange={(e) => setNewEmployee({ ...newEmployee, nationality: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={newEmployee.phoneNumber}
              onChange={(e) => setNewEmployee({ ...newEmployee, phoneNumber: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            onClick={handleAddEmployee}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Add Employee
          </button>
        </div>
      )}

      {/* List of Employees */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <div key={employee.id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">
              {employee.firstName} {employee.lastName}
            </h3>
            <p className="text-gray-600">Role: {employee.role}</p>
            <p className="text-gray-600">Email: {employee.email}</p>
            <p className="text-gray-600">DOB: {employee.dob}</p>
            <p className="text-gray-600">Gender: {employee.gender}</p>
            <p className="text-gray-600">Nationality: {employee.nationality}</p>
            <p className="text-gray-600">Phone: {employee.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
