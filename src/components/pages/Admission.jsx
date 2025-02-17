import { useState } from "react";
import Layout from "../../common/Layout";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Layout>
      <div className="container" style={{marginTop : "50px"}}>
        <div className="form-container my-6">
          <h2 className="form-title">Admission Form</h2>
          <form onSubmit={handleSubmit} className="admission-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Grade Applying For</label>
              <select 
                name="grade" 
                value={formData.grade} 
                onChange={handleChange} 
                required 
                className="form-input"
              >
                <option value="">Select Grade</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Additional Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="form-input form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <style>
        {`
        /* AdmissionForm.css */
.container {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}

.form-container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.admission-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  border-color: #3b82f6;
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #1d4ed8;
}

/* Responsive styles */
@media (max-width: 640px) {
  .form-container {
    padding: 1rem;
  }
}`}
      </style>
    </Layout>
  );
};

export default AdmissionForm;