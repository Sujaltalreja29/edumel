import React from 'react';
import Layout from "../../common/Layout";

const CBSEResults = () => {
  const resultsData = [
    {
      title: "Recent Board Results (2020-2024)",
      description: "Past 5 years board examination results",
      items: [
        { year: "2024", class10: "98.5%", class12: "97.8%", topperName: "Priya Sharma", topperMarks: "98.6%" },
        { year: "2023", class10: "97.8%", class12: "96.5%", topperName: "Rahul Verma", topperMarks: "98.2%" },
        { year: "2022", class10: "96.9%", class12: "95.7%", topperName: "Ananya Patel", topperMarks: "97.8%" },
        { year: "2021", class10: "97.2%", class12: "96.1%", topperName: "Arjun Singh", topperMarks: "97.4%" },
        { year: "2020", class10: "96.5%", class12: "95.3%", topperName: "Neha Gupta", topperMarks: "97.0%" }
      ]
    },
    {
      title: "Class-wise Performance",
      description: "Detailed breakdown by class and subjects",
      items: [
        { class: "Class 10", totalStudents: "120", distinctionHolders: "85", averageScore: "92.5%", subjects: "All Core" },
        { class: "Class 12 Science", totalStudents: "60", distinctionHolders: "45", averageScore: "91.8%", subjects: "PCM/PCB" },
        { class: "Class 12 Commerce", totalStudents: "45", distinctionHolders: "35", averageScore: "90.5%", subjects: "Commerce" }
      ]
    },
    {
      title: "Subject Toppers 2024",
      description: "Highest scoring students in different subjects",
      items: [
        { subject: "Mathematics", studentName: "Ravi Kumar", score: "99%", class: "Class 12" },
        { subject: "Physics", studentName: "Meera Patel", score: "98%", class: "Class 12" },
        { subject: "English", studentName: "Aditya Shah", score: "97%", class: "Class 10" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container py-4">
        <p className="text-center text-gray-700 mb-4">
          We take pride in our students' consistent academic excellence in CBSE Board Examinations.
        </p>

        <div className="accordion" id="resultsAccordion">
          {resultsData.map((section, index) => (
            <div className="accordion-item mb-3 border rounded" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed p-4 bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  <div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.description}</p>
                  </div>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#resultsAccordion"
              >
                <div className="accordion-body bg-gray-50 p-4">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          {section.title === "Recent Board Results (2020-2024)" && (
                            <>
                              <th>Year</th>
                              <th>Class 10 Pass %</th>
                              <th>Class 12 Pass %</th>
                              <th>School Topper</th>
                              <th>Topper's Score</th>
                            </>
                          )}
                          {section.title === "Class-wise Performance" && (
                            <>
                              <th>Class</th>
                              <th>Total Students</th>
                              <th>Distinction Holders</th>
                              <th>Average Score</th>
                              <th>Subjects</th>
                            </>
                          )}
                          {section.title === "Subject Toppers 2024" && (
                            <>
                              <th>Subject</th>
                              <th>Student Name</th>
                              <th>Score</th>
                              <th>Class</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {section.items.map((item, itemIndex) => (
                          <tr key={itemIndex}>
                            {section.title === "Recent Board Results (2020-2024)" && (
                              <>
                                <td>{item.year}</td>
                                <td>{item.class10}</td>
                                <td>{item.class12}</td>
                                <td>{item.topperName}</td>
                                <td>{item.topperMarks}</td>
                              </>
                            )}
                            {section.title === "Class-wise Performance" && (
                              <>
                                <td>{item.class}</td>
                                <td>{item.totalStudents}</td>
                                <td>{item.distinctionHolders}</td>
                                <td>{item.averageScore}</td>
                                <td>{item.subjects}</td>
                              </>
                            )}
                            {section.title === "Subject Toppers 2024" && (
                              <>
                                <td>{item.subject}</td>
                                <td>{item.studentName}</td>
                                <td>{item.score}</td>
                                <td>{item.class}</td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded mt-4">
          <h4 className="font-semibold mb-2">Our Achievements:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li className="mb-2">Consistently above 95% pass percentage in both Class 10 and 12</li>
            <li className="mb-2">Over 50% of our students score above 90% in board exams</li>
            <li className="mb-2">100% of our students qualify for higher education</li>
            <li className="mb-2">Multiple students selected for prestigious institutions like IITs and AIIMS</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default CBSEResults;