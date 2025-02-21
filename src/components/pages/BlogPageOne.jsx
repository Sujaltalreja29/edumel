import React from 'react';
import './BookGrid.css';
import Layout from '../../common/Layout';
import jsPDF from 'jspdf';

const classData = [
  {
    class: 1,
    books: [
      { subject: "English", name: "Marigold Book 1" },
      { subject: "Hindi", name: "Rimjhim 1" },
      { subject: "Mathematics", name: "Math Magic 1" },
      { subject: "EVS", name: "Looking Around 1" },
    ],
    totalBooks: 4,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80"
  },
  {
    class: 2,
    books: [
      { subject: "English", name: "Marigold Book 2" },
      { subject: "Hindi", name: "Rimjhim 2" },
      { subject: "Mathematics", name: "Math Magic 2" },
      { subject: "EVS", name: "Looking Around 2" },
    ],
    totalBooks: 4,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80"
  },
  {
    class: 3,
    books: [
      { subject: "English", name: "Marigold Book 3" },
      { subject: "Hindi", name: "Rimjhim 3" },
      { subject: "Mathematics", name: "Math Magic 3" },
      { subject: "EVS", name: "Looking Around 3" },
      { subject: "Computer", name: "Computer Studies 3" },
    ],
    totalBooks: 5,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80"
  },
  {
    class: 4,
    books: [
      { subject: "English", name: "Marigold Book 4" },
      { subject: "Hindi", name: "Rimjhim 4" },
      { subject: "Mathematics", name: "Math Magic 4" },
      { subject: "EVS", name: "Looking Around 4" },
      { subject: "Computer", name: "Computer Studies 4" },
    ],
    totalBooks: 5,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80"
  },
  {
    class: 5,
    books: [
      { subject: "English", name: "Marigold Book 5" },
      { subject: "Hindi", name: "Rimjhim 5" },
      { subject: "Mathematics", name: "Math Magic 5" },
      { subject: "EVS", name: "Looking Around 5" },
      { subject: "Computer", name: "Computer Studies 5" },
    ],
    totalBooks: 5,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&q=80"
  },
  {
    class: 6,
    books: [
      { subject: "English", name: "Honeysuckle" },
      { subject: "Hindi", name: "Vasant 1" },
      { subject: "Mathematics", name: "Mathematics 6" },
      { subject: "Science", name: "Science 6" },
      { subject: "Social Science", name: "Our Past I" },
      { subject: "Sanskrit", name: "Ruchira" },
      { subject: "Computer", name: "Computer Studies 6" },
    ],
    totalBooks: 7,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80"
  },
  {
    class: 7,
    books: [
      { subject: "English", name: "Honeycomb" },
      { subject: "Hindi", name: "Vasant 2" },
      { subject: "Mathematics", name: "Mathematics 7" },
      { subject: "Science", name: "Science 7" },
      { subject: "Social Science", name: "Our Past II" },
      { subject: "Sanskrit", name: "Ruchira" },
      { subject: "Computer", name: "Computer Studies 7" },
    ],
    totalBooks: 7,
    image: "https://images.unsplash.com/photo-1550592704-6c76defa9985?w=500&q=80"
  },
  {
    class: 8,
    books: [
      { subject: "English", name: "Honeydew" },
      { subject: "Hindi", name: "Vasant 3" },
      { subject: "Mathematics", name: "Mathematics 8" },
      { subject: "Science", name: "Science 8" },
      { subject: "Social Science", name: "Our Past III" },
      { subject: "Sanskrit", name: "Ruchira" },
      { subject: "Computer", name: "Computer Studies 8" },
    ],
    totalBooks: 7,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80"
  },
  {
    class: 9,
    books: [
      { subject: "English", name: "Beehive" },
      { subject: "Hindi", name: "Kshitij" },
      { subject: "Mathematics", name: "Mathematics 9" },
      { subject: "Science", name: "Science 9" },
      { subject: "Social Science", name: "Contemporary India" },
      { subject: "Sanskrit", name: "Shemushi" },
      { subject: "Computer", name: "Foundation of IT" },
    ],
    totalBooks: 7,
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&q=80"
  },
  {
    class: 10,
    books: [
      { subject: "English", name: "First Flight" },
      { subject: "Hindi", name: "Kshitij 2" },
      { subject: "Mathematics", name: "Mathematics 10" },
      { subject: "Science", name: "Science 10" },
      { subject: "Social Science", name: "Contemporary India II" },
      { subject: "Sanskrit", name: "Shemushi II" },
      { subject: "Computer", name: "Foundation of IT" },
    ],
    totalBooks: 7,
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500&q=80"
  },
  {
    class: 11,
    books: [
      { subject: "English", name: "Hornbill" },
      { subject: "Physics", name: "Physics Part I & II" },
      { subject: "Chemistry", name: "Chemistry Part I & II" },
      { subject: "Mathematics", name: "Mathematics 11" },
      { subject: "Biology", name: "Biology" },
      { subject: "Computer Science", name: "Computer Science with Python" },
      { subject: "Physical Education", name: "Health and Physical Education" },
    ],
    totalBooks: 7,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80"
  },
  {
    class: 12,
    books: [
      { subject: "English", name: "Flamingo" },
      { subject: "Physics", name: "Physics Part I & II" },
      { subject: "Chemistry", name: "Chemistry Part I & II" },
      { subject: "Mathematics", name: "Mathematics 12" },
      { subject: "Biology", name: "Biology" },
      { subject: "Computer Science", name: "Computer Science with Python" },
      { subject: "Physical Education", name: "Health and Physical Education" },
    ],
    totalBooks: 7,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80"
  },
];


function BookGrid() {
  const handleDownload = (classInfo) => {
    // Create new PDF document
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text(`Class ${classInfo.class} Books`, 20, 20);
    
    // Add books list
    doc.setFontSize(12);
    classInfo.books.forEach((book, index) => {
      doc.text(`${book.subject}: ${book.name}`, 20, 40 + (index * 10));
    });
    
    // Save the PDF
    doc.save(`Class_${classInfo.class}_Books.pdf`);
  };

  return (
    <>
    <Layout>
    <div className="book-grid">
      <div className="container">
        <div className="header">
          <h1>School Books</h1>
          <p>Browse books for all classes</p>
        </div>

        <div className="grid">
          {classData.map((classInfo) => (
            <div key={classInfo.class} className="card">
              <div className="card-image">
                <img
                  src={classInfo.image || "/placeholder.svg"}
                  alt={`Class ${classInfo.class} Books`}
                />
                <div className="class-badge">
                  Class {classInfo.class}
                </div>
              </div>

              <div className="card-content">
                <h3>Class {classInfo.class}</h3>
                <div className="book-count">
                  <svg viewBox="0 0 24 24" className="book-icon">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>{classInfo.totalBooks} Books</span>
                </div>
              </div>

              <div className="hover-content">
              <h4>Book List:</h4>
                <button 
                  onClick={() => handleDownload(classInfo)} 
                  className="view-details"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
}

export default BookGrid;