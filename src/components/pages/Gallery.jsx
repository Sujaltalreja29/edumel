import { SlideshowLightbox } from "lightbox.js-react"
// import "lightbox.js-react/dist/index.css"
import Layout from '../../common/Layout'
const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1569098272587-7af816a8293c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwc2Nob29sc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Students in a classroom",
    },
    {
      src: "https://images.unsplash.com/photo-1519406596751-0a3ccc4937fe?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHNjaG9vbHN8ZW58MHx8MHx8fDA%3D",
      alt: "School building exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1589087394126-9a3025e53867?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHNjaG9vbHN8ZW58MHx8MHx8fDA%3D",
      alt: "Students in a library",
    },
    {
      src: "https://media.istockphoto.com/id/896366108/photo/school-girl-in-uniform-of-indian-ethnicity-sitting-in-their-village-classroom-looking-at.jpg?s=1200&w=1200&k=20&c=Go2oCgd3Fm-vwGNnCV2d8SF8pGG_slbNNY3OHmoWDEI=",
      alt: "Girl in school uniform",
    },
  ]

  return (
    <Layout>
    <div className="school-gallery">
      <h1 className="gallery-title">School Gallery</h1>
      <p className="gallery-description">Explore the vibrant moments from our school activities.</p>
      <SlideshowLightbox
        className="gallery-container"
        showThumbnails={true}
        showFullscreenButton={true}
        startingSlideIndex={0}
      >
        {images.map((image, index) => (
          <img key={index} className="gallery-image" src={image.src || "/placeholder.svg"} alt={image.alt} />
        ))}
      </SlideshowLightbox>
      <style jsx>{`
        .school-gallery {
          font-family: 'Arial', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .gallery-title {
          font-size: 2.5rem;
          color: #333;
          text-align: center;
          margin-bottom: 10px;
        }
        .gallery-description {
          font-size: 1rem;
          color: #666;
          text-align: center;
          margin-bottom: 20px;
        }
        .gallery-container {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 10px;
          padding-bottom: 20px;
        }
        .gallery-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .gallery-image:hover {
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .gallery-image {
            height: 300px;
          }
        }
      `}</style>
    </div>
    </Layout>
  )
}

export default Gallery

