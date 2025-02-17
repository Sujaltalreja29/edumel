import React from 'react';
import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/blog/index';
import './SchoolCurriculum.css';
    
const subjects = [
  { name: "English", description: "NCERT textbooks with focus on communication skills" },
  { name: "Hindi", description: "Comprehensive study of Hindi literature and grammar" },
  { name: "Mathematics", description: "NCERT curriculum with emphasis on problem-solving" },
  { name: "Science", description: "Integrated approach to Physics, Chemistry, and Biology" },
  { name: "Social Science", description: "History, Geography, Political Science, and Economics" },
  { name: "Computer Science", description: "Programming fundamentals and digital literacy" },
  { name: "Physical Education", description: "Sports, yoga, and health education" },
  { name: "Art Education", description: "Visual and performing arts" },
];

const coActivities = [
  "Debate and Public Speaking",
  "Science and Math Olympiads",
  "Environmental Club",
  "Music and Dance",
  "Sports (Cricket, Football, Basketball, Athletics)"
];

const SubjectCard = ({ subject }) => {
  return (
    <div className="subject-card">
      <h3 className="subject-title">{subject.name}</h3>
      <p className="subject-description">{subject.description}</p>
    </div>
  );
};

const CoActivitiesSection = () => {
  return (
    <div className="activities-section">
      <h2 className="activities-title">Co-Curricular Activities</h2>
      <ul className="activities-list">
        {coActivities.map((activity, index) => (
          <li key={index} className="activity-item">{activity}</li>
        ))}
      </ul>
    </div>
  );
};

const SchoolCurriculum = () => {
  return (
    <Layout>
      <PageBanner
        title="Our School Curriculum"
        rootUrl="/"
        parentUrl="Home"
        currentUrl="Curriculum"
      />
      
      <div className="curriculum-container">
        <div className="curriculum-content">
          <p className="curriculum-intro">
            Our curriculum is designed in accordance with the CBSE guidelines, focusing on holistic development and
            preparing students for future challenges.
          </p>
          
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} subject={subject} />
            ))}
          </div>
          
          <CoActivitiesSection />
        </div>
      </div>
    </Layout>
  );
};

export default SchoolCurriculum;