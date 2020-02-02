import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import Video from '../../Video'
import Modal from '../../Modal'
import HighlightImages from './image-map'
import './index.css'

const HighlightGalleryImage = ({ id, imgSrc, imgAlt, className = '', onClick, isClickable = false }) => (
    <div
      role='button'
      tabIndex={0}
      className={`${isClickable ? 'highlight-img-video' : ''}`}
      onClick={() => {
        if (isClickable) {
          onClick()
        }
      }}
      onKeyPress={() => {}}
    >
      <img
        key={id}
        src={imgSrc}
        alt={imgAlt}
        className={className}
      />
    </div>
)

const HighlightVideo = ({ src, toggleModalVisibility, isModalOpen }) => (
  <Modal
    className='highlight-video-modal'
    body={(
      <Video
        src={src}
        className='highlight-video-frame'
        allowFullScreen={false}
        isExternalSource={true}
      />
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
          className={`highlight-gallery-image ${image.className || ''}`}
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
    alt: img.alt || `highlight-img-${idx + 1}`,
    videoSrc: img.videoSrc,
    isClickable: !!img.videoSrc,
    className: img.className || ''
  }))
}

const Highlights = () => (
  <section className='section-highlights'>
    <SectionTitle text='Highlights' className='title-highlights' />
    <HighlightGallery />
  </section>
)

export default Highlights
