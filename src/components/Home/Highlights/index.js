import React from 'react'
import SectionTitle from '../SectionTitle'
import HighlightImages from './image-map'
import './index.css'

const HighlightGalleryImage = ({ id, imgSrc, imgAlt, className = '', isClickable = false, videoSrc }) => (
  <img
    key={id}
    src={imgSrc}
    alt={imgAlt}
    className={className}
    onClick={() => {}}
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
        videoSrc={image.videoSrc}
        isClickable={image.isClickable}
      />
    ))}
  </div>
)

HighlightGallery.defaultProps = {
  images: HighlightImages.map((img, idx) => ({
    src: img,
    alt: `highlight-img-${idx}`,
    videoSrc: '',
    isClickable: idx === HighlightImages.length - 1
  }))
}

const Highlights = () => (
  <section className='section-highlights'>
    <SectionTitle text='Highlights' className='title-highlights' />
    <HighlightGallery />
  </section>
)

export default Highlights
