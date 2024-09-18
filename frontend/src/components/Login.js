import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    setError(''); // Clear any existing errors

    try {
      const response = await axios.post('http://localhost:8080/login', {
        username: email,
        password: password
      });

      console.log('Server response:', response.data);

      if (response.data && response.data.message === "Login successful") {
        localStorage.setItem('isAuthenticated', 'true');
        console.log('Login successful, navigating to dashboard');
        navigate('/dashboard');
      } else {
        setError('Unexpected response from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        setError(error.response.data.error || 'Server error. Please try again.');
      } else if (error.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };


  return (
    <div className="login-page">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>
      
      <div className="container">
        <div className="login-form">
          <h1>Welcome</h1>
          <p>Please login to continue...</p>
          
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email"
              placeholder="Enter Email" 
              required 
              value={credentials.email}
              onChange={handleChange}
            />
            <input 
              type="password" 
              name="password"
              placeholder="Enter Password" 
              required
              value={credentials.password}
              onChange={handleChange}
            />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit">LOGIN</button>
          </form>

          <div className="social-login">
            <button>Facebook</button>
            <button>Google</button>
          </div>
        </div>

        <div className="image-container">
          <img src={process.env.PUBLIC_URL + '/images/buildyourcar.avif'} alt="Login illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;