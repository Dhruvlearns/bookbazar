import React, { useState } from 'react';
import "../Pages/Sellyourbook.css"; // Ensure this path is correct

const Sellyourbook = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    condition: '',
    photos: null,
    quantity: '',
    mrp: '',
    sellingPrice: '',
    whatsappNumber: '',
    name: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.title) formErrors.title = 'Title is required';
    if (!formData.category) formErrors.category = 'Category is required';
    if (!formData.condition) formErrors.condition = 'Condition is required';
    if (!formData.photos) formErrors.photos = 'Photo is required';
    if (!formData.quantity) formErrors.quantity = 'Quantity is required';
    if (!formData.mrp) formErrors.mrp = 'MRP is required';
    if (!formData.sellingPrice) formErrors.sellingPrice = 'Selling price is required';
    if (!formData.whatsappNumber) formErrors.whatsappNumber = 'WhatsApp number is required';
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.address) formErrors.address = 'Address is required';
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
    <form className="sellyourbook-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title of Book:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div className="form-group">
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="upto12th">Upto 12th</option>
          <option value="college">College</option>
          <option value="competitiveExams">Competitive Exams</option>
        </select>
        {errors.category && <span className="error">{errors.category}</span>}
      </div>
      <div className="form-group">
        <label>Condition:</label>
        <select
          name="condition"
          value={formData.condition}
          onChange={handleChange}
        >
          <option value="">Select Condition</option>
          <option value="new">New</option>
          <option value="good">Good</option>
          <option value="used">Used</option>
        </select>
        {errors.condition && <span className="error">{errors.condition}</span>}
      </div>
      <div className="form-group">
        <label>Upload Photos of Book:</label>
        <input
          type="file"
          name="photos"
          onChange={handleChange}
        />
        {errors.photos && <span className="error">{errors.photos}</span>}
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        {errors.quantity && <span className="error">{errors.quantity}</span>}
      </div>
      <div className="form-group">
        <label>Book MRP:</label>
        <input
          type="number"
          name="mrp"
          value={formData.mrp}
          onChange={handleChange}
        />
        {errors.mrp && <span className="error">{errors.mrp}</span>}
      </div>
      <div className="form-group">
        <label>Your Selling Price:</label>
        <input
          type="number"
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleChange}
        />
        {errors.sellingPrice && <span className="error">{errors.sellingPrice}</span>}
      </div>
      <div className="form-group">
        <label>WhatsApp Number:</label>
        <input
          type="text"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
        />
        {errors.whatsappNumber && <span className="error">{errors.whatsappNumber}</span>}
      </div>
      <div className="form-group">
        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span className="error">{errors.address}</span>}
      </div>
      <button type="submit" className="submit-button">Sell Your Book</button>
    </form>
  );
};

export default Sellyourbook;
