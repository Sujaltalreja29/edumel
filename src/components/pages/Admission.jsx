import { useState } from "react";
import Layout from "../../common/Layout";
import { PageBanner } from "../layouts/instructors";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    // Student Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Academic Information
    gradeApplying: "",
    currentSchool: "",
    currentGrade: "",
    academicYear: "",

    // Parent/Guardian Information
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentOccupation: "",
    relationship: "",

    // Additional Information
    hasSpecialNeeds: "",
    specialNeedsDetails: "",
    extracurricular: "",
    siblingAtSchool: "",
    siblingDetails: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Layout>
        <PageBanner
          title="Admission"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Admission"
        />
        <div className="container">
          <div className="admission-form-wrapper">
            <h2 className="form-title">Student Admission Form</h2>

            <form onSubmit={handleSubmit} className="admission-form">
              <div className="form-columns">
                {/* Column 1: Student Information */}
                <div className="form-column">
                  <h3 className="section-title">Student Information</h3>

                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Column 2: Academic Information */}
                <div className="form-column">
                  <h3 className="section-title">Academic Information</h3>

                  <div className="form-group">
                    <label>Grade Applying For</label>
                    <select
                      name="gradeApplying"
                      value={formData.gradeApplying}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="Kindergarten">Kindergarten</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Current School</label>
                    <input
                      type="text"
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Current Grade</label>
                    <input
                      type="text"
                      name="currentGrade"
                      value={formData.currentGrade}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Academic Year</label>
                    <select
                      name="academicYear"
                      value={formData.academicYear}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2025-2026">2025-2026</option>
                    </select>
                  </div>
                </div>

                {/* Column 3: Parent/Guardian Information */}
                <div className="form-column">
                  <h3 className="section-title">Parent/Guardian Information</h3>

                  <div className="form-group">
                    <label>Parent/Guardian Name</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Parent/Guardian Email</label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Parent/Guardian Phone</label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Occupation</label>
                    <input
                      type="text"
                      name="parentOccupation"
                      value={formData.parentOccupation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Relationship to Student</label>
                    <select
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Relationship</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="additional-info">
                <h3 className="section-title">Additional Information</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Does the student have any special needs?</label>
                    <select
                      name="hasSpecialNeeds"
                      value={formData.hasSpecialNeeds}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>If yes, please provide details</label>
                    <textarea
                      name="specialNeedsDetails"
                      value={formData.specialNeedsDetails}
                      onChange={handleChange}
                      rows="2"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <label>Extracurricular activities/interests</label>
                  <textarea
                    name="extracurricular"
                    value={formData.extracurricular}
                    onChange={handleChange}
                    rows="2"
                  ></textarea>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Does the student have any siblings at our school?</label>
                    <select
                      name="siblingAtSchool"
                      value={formData.siblingAtSchool}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>If yes, please provide details</label>
                    <textarea
                      name="siblingDetails"
                      value={formData.siblingDetails}
                      onChange={handleChange}
                      rows="2"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Comments</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdmissionForm;