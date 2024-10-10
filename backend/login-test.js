import http from 'k6/http';
import { check, sleep } from 'k6';

// Performance Test Configuration
export let options = {
    vus: 100,  // Virtual Users (Number of concurrent users)
    duration: '30s',  // Test duration
};

export default function () {
    // Define the login payload
    const payload = JSON.stringify({
        email: 'admin@gmail.com',
        password: 'password123',
    });

    // Set headers
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Send POST request to the login endpoint
    const res = http.post('http://localhost:8080/login', payload, params);

    // Check if the response status is 200 (OK)
    check(res, {
        'Login successful': (r) => r.status === 200,
    });

    // Simulate some wait time between requests
    sleep(1);
}
