import React, { useState } from 'react';
import Layout from '../../common/Layout';
import "./TeacherCV.css";
import { PageBanner } from '../layouts/instructors';

const TeacherCVPage = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "",
      dob: "",
      gender: "",
      qualification: "",
      specialization: "",
      experience: "",
      subjects: "",
      classes: "",
      email: "",
      phone: "",
      address: ""
    }
  ]);

  const handleInputChange = (id, field, value) => {
    setTeachers(prevTeachers =>
      prevTeachers.map(teacher =>
        teacher.id === id ? { ...teacher, [field]: value } : teacher
      )
    );
  };

  const addNewRow = () => {
    setTeachers(prev => [...prev, {
      id: prev.length + 1,
      name: "",
      dob: "",
      gender: "",
      qualification: "",
      specialization: "",
      experience: "",
      subjects: "",
      classes: "",
      email: "",
      phone: "",
      address: ""
    }]);
  };

  const downloadCSV = () => {
    const headers = ["Name", "Date of Birth", "Gender", "Qualification", "Specialization", 
                    "Years of Experience", "Subjects Taught", "Classes Handled", 
                    "Email", "Phone", "Address"];
    
    const csvData = [
      headers,
      ...teachers.map(teacher => [
        teacher.name,
        teacher.dob,
        teacher.gender,
        teacher.qualification,
        teacher.specialization,
        teacher.experience,
        teacher.subjects,
        teacher.classes,
        teacher.email,
        teacher.phone,
        teacher.address
      ])
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'teachers_cv.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
    <Layout>
    <PageBanner
                    title="Teachers CV"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="TC"
                    />
      <div className="cv-container">
        <div className="cv-header">
          <h2>Teacher CV Information</h2>
          <div className="cv-actions">
            {/* <button onClick={addNewRow} className="add-row-btn">
              Add New Row
            </button> */}
            <button onClick={downloadCSV} className="download-btn">
              Download CSV Template
            </button>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="cv-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Qualification</th>
                <th>Specialization</th>
                <th>Experience (Years)</th>
                <th>Subjects Taught</th>
                <th>Classes Handled</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map(teacher => (
                <tr key={teacher.id}>
                  <td>
                    <input
                      type="text"
                      value={teacher.name}
                      onChange={(e) => handleInputChange(teacher.id, 'name', e.target.value)}
                      placeholder="Full Name"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={teacher.dob}
                      onChange={(e) => handleInputChange(teacher.id, 'dob', e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      value={teacher.gender}
                      onChange={(e) => handleInputChange(teacher.id, 'gender', e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={teacher.qualification}
                      onChange={(e) => handleInputChange(teacher.id, 'qualification', e.target.value)}
                      placeholder="Highest Qualification"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={teacher.specialization}
                      onChange={(e) => handleInputChange(teacher.id, 'specialization', e.target.value)}
                      placeholder="Specialization"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={teacher.experience}
                      onChange={(e) => handleInputChange(teacher.id, 'experience', e.target.value)}
                      placeholder="Years"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={teacher.subjects}
                      onChange={(e) => handleInputChange(teacher.id, 'subjects', e.target.value)}
                      placeholder="Subjects"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={teacher.classes}
                      onChange={(e) => handleInputChange(teacher.id, 'classes', e.target.value)}
                      placeholder="Classes"
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={teacher.email}
                      onChange={(e) => handleInputChange(teacher.id, 'email', e.target.value)}
                      placeholder="Email"
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      value={teacher.phone}
                      onChange={(e) => handleInputChange(teacher.id, 'phone', e.target.value)}
                      placeholder="Phone"
                    />
                  </td>
                  <td>
                    <textarea
                      value={teacher.address}
                      onChange={(e) => handleInputChange(teacher.id, 'address', e.target.value)}
                      placeholder="Address"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default TeacherCVPage;