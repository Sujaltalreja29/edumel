"use client"

import { useState } from "react"
import { SlideshowLightbox } from "lightbox.js-react"
import "lightbox.js-react/dist/index.css"
import Layout from "../../common/Layout"

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0)
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
  ]

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1)
  }

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
            <img
              key={index}
              className="gallery-image"
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              loading="lazy"
              // onLoad={handleImageLoad}
            />
          ))}
        </SlideshowLightbox>
        {/* {imagesLoaded < images.length && (
          <div className="loading-overlay">
            <p>
              Loading images... {imagesLoaded}/{images.length}
            </p>
          </div>
        )} */}
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
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding-bottom: 20px;
          }
          .gallery-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .gallery-image:hover {
            transform: scale(1.02);
          }
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            color: #333;
          }
          @media (max-width: 768px) {
            .gallery-container {
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
            .gallery-image {
              height: 200px;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}

export default Gallery

