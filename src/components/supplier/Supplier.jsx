import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SupplierSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // Add more fields as needed
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here

    // Example of sending form data to backend
    fetch('/api/supplier/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful submission, e.g., show success message
        console.log('Signup successful:', data);
        history.push('/dashboard'); // Redirect to dashboard after successful signup
      })
      .catch((error) => {
        // Handle error, e.g., show error message
        console.error('Error signing up:', error);
      });
  };

  return (
    <div>
      <h2>Supplier Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SupplierSignup;
