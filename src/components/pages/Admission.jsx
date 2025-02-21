import React, { useState } from 'react';
import Layout from "../../common/Layout";
import { PageBanner } from "../layouts/instructors";

const Result = () => {
  return (
    <p className="success-message">Thank you for submitting your application. We will contact you soon.</p>
  );
};

const AdmissionForm = () => {
  const [result, setResult] = useState(false);
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
    setResult(true);
    
    setTimeout(() => {
      setResult(false);
    }, 5000);
  };

  return (
    <Layout>
      <PageBanner
        title="Student Admission Form"
        rootUrl="/"
        parentUrl="Home"
        currentUrl="Admission"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className="text-center mb-5"></h2>
            
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Column 1: Student Information */}
                <div className="col-lg-4">
                  <h4 className="mb-4">Student Information</h4>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="date"
                      name="dateOfBirth"
                      className="form-control"
                      placeholder="Date of Birth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      name="gender"
                      className="form-control"
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
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Column 2: Academic Information */}
                <div className="col-lg-4">
                  <h4 className="mb-4">Academic Information</h4>
                  <div className="form-group mb-4">
                    <select
                      name="gradeApplying"
                      className="form-control"
                      value={formData.gradeApplying}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Grade Applying For</option>
                      <option value="Kindergarten">Kindergarten</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                    </select>
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="currentSchool"
                      className="form-control"
                      placeholder="Current School"
                      value={formData.currentSchool}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="currentGrade"
                      className="form-control"
                      placeholder="Current Grade"
                      value={formData.currentGrade}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      name="academicYear"
                      className="form-control"
                      value={formData.academicYear}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Academic Year</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2025-2026">2025-2026</option>
                    </select>
                  </div>
                </div>

                {/* Column 3: Parent/Guardian Information */}
                <div className="col-lg-4">
                  <h4 className="mb-4">Parent/Guardian Information</h4>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="parentName"
                      className="form-control"
                      placeholder="Parent/Guardian Name"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      name="parentEmail"
                      className="form-control"
                      placeholder="Parent/Guardian Email"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="tel"
                      name="parentPhone"
                      className="form-control"
                      placeholder="Parent/Guardian Phone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="parentOccupation"
                      className="form-control"
                      placeholder="Parent/Guardian Occupation"
                      value={formData.parentOccupation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      name="relationship"
                      className="form-control"
                      value={formData.relationship}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Relationship to Student</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information Section - Full Width */}
              <div className="row mt-5">
                <div className="col-12">
                  <h4 className="mb-4">Additional Information</h4>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <select
                      name="hasSpecialNeeds"
                      className="form-control"
                      value={formData.hasSpecialNeeds}
                      onChange={handleChange}
                    >
                      <option value="">Does the student have any special needs?</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <textarea
                      name="specialNeedsDetails"
                      className="form-control"
                      placeholder="If yes, please provide details"
                      value={formData.specialNeedsDetails}
                      onChange={handleChange}
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-4">
                    <textarea
                      name="extracurricular"
                      className="form-control"
                      placeholder="Extracurricular activities/interests"
                      value={formData.extracurricular}
                      onChange={handleChange}
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <select
                      name="siblingAtSchool"
                      className="form-control"
                      value={formData.siblingAtSchool}
                      onChange={handleChange}
                    >
                      <option value="">Does the student have any siblings at our school?</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <textarea
                      name="siblingDetails"
                      className="form-control"
                      placeholder="If yes, please provide details"
                      value={formData.siblingDetails}
                      onChange={handleChange}
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-4">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Additional Comments"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row mt-4 mb-4">
                <div className="col-12">
                  <button className="btn btn-main w-100 rounded" type="submit">
                    Submit Application
                  </button>
                </div>
              </div>

              {result && (
                <div className="row mt-4">
                  <div className="col-12">
                    <Result />
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdmissionForm;