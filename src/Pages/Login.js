import React, { useState } from 'react';
import "../Pages/Login.css"; // Ensure this path is correct

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.identifier) formErrors.identifier = 'Email address or phone number is required';
    if (!formData.password) formErrors.password = 'Password is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Submit form data
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email Address/Phone Number:</label>
        <input
          type="text"
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
        />
        {errors.identifier && <span className="error">{errors.identifier}</span>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit" className="submit-button">Login</button>
    </form>
  );
};

export default Login;
