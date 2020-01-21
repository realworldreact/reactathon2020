import React from 'react'
import SectionTitle from '../SectionTitle'
import './index.css'

const HighlightGalleryImage = ({ id, imgSrc, imgAlt, className = '' }) => (
  <img
    key={id}
    src={imgSrc}
    alt={imgAlt}
    className={className}
  />
)

const HighlightGallery = ({ images }) => (
  <div className='highlight-gallery'>
    {images.map((image,idx) => (
      <HighlightGalleryImage 
        key={idx}
        id={idx}
        className='highlight-gallery-image'
        imgSrc={image.src}
        imgAlt={image.alt}
      /> 
    ))}
  </div>
)

HighlightGallery.defaultProps = {
  images: [{
    src: '',
    alt: ''
  }]
}

const Highlights = () => (
  <section className='section-highlights'>
    <SectionTitle text='Highlights' className='title-highlights' />
    <HighlightGallery />
  </section>
)

export default Highlights
