import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import Modal from '../../Modal'
import HighlightImages from './image-map'
import './index.css'

const HighlightGalleryImage = ({ id, imgSrc, imgAlt, className = '', onClick, isClickable = false }) => (
    <img
      key={id}
      src={imgSrc}
      alt={imgAlt}
      className={className}
      onClick={() => {
        if (isClickable) {
          onClick()
        }
      }}
    />
)

const HighlightVideo = ({ src, toggleModalVisibility, isModalOpen }) => (
  <Modal
    className='highlight-video-modal'
    body={(
      <iframe
      className='highlight-video-frame'
      frameborder="0" allowfullscreen=""
      src={src} />
    )}
    isModalOpen={isModalOpen}
    onClose={() => toggleModalVisibility(!isModalOpen)}
  />
)

const HighlightGallery = ({ images }) => {
  const [isModalOpen, toggleModalVisibility] = useState(false)
  const [videoSrc, setVideoSrc] = useState(null)
  return (
    <div className='highlight-gallery'>
      {images.map((image,idx) => (
        <HighlightGalleryImage
          key={idx}
          id={idx}
          className='highlight-gallery-image'
          imgSrc={image.src}
          imgAlt={image.alt}
          isClickable={image.isClickable}
          onClick={() => {
            if (image.isClickable) {
              setVideoSrc(image.videoSrc)
              toggleModalVisibility(!isModalOpen)
            }
          }}
        />
      ))}
      <HighlightVideo
        src={videoSrc}
        isModalOpen={isModalOpen}
        toggleModalVisibility={toggleModalVisibility}
      />
    </div>
  )
}

HighlightGallery.defaultProps = {
  images: HighlightImages.map((img, idx) => ({
    src: img.src,
    alt: img.alt || `highlight-img-${idx}`,
    videoSrc: img.videoSrc,
    isClickable: !!img.videoSrc
  }))
}

const Highlights = () => (
  <section className='section-highlights'>
    <SectionTitle text='Highlights' className='title-highlights' />
    <HighlightGallery />
  </section>
)

export default Highlights
