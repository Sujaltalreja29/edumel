import React, { useState } from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';
import Layout from '../../common/Layout';

const styles = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    backgroundColor: '#ffffff'
  },
  uploadWrapper: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  uploadContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  header: {
    backgroundColor: 'cornflowerblue',
    padding: '1rem',
    color: '#ffffff'
  },
  headerText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: 0,
    height: '60px',

  },
  contentArea: {
        padding: '1.5rem'
  },
  label: {
    display: 'block',
    color: '#374151',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.5rem'
  },
  fileInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem'
  },
  chooseFileBtn: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    color: '#374151',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  chooseFileBtnHover: {
    backgroundColor: '#FFE4E1'
  },
  fileName: {
    marginLeft: '0.75rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  }
};

const CVUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <Layout>
<PageBanner
                    title="TC"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="TC"
                    />
      
      <div className="container" style={{paddingTop : "50px"}}>
        <div style={styles.uploadWrapper}>
          <div style={styles.uploadContainer}>
            <div style={styles.header}>
              <h1 style={styles.headerText}>
                Teacher CV Upload
              </h1>
            </div>

            <div style={styles.contentArea}>
              <label style={styles.label}>
                Upload Teacher CV PDF
              </label>
              
              <div style={styles.fileInputWrapper}>
                <label 
                  style={{
                    ...styles.chooseFileBtn,
                    ...(isHovered ? styles.chooseFileBtnHover : {})
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Choose File
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </label>
                <span style={styles.fileName}>
                  {selectedFile ? selectedFile.name : 'No file chosen'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </Layout>
    </>
  );
};

export default CVUploadPage;