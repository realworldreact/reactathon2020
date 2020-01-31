import React from 'react'
import './index.css'

const InternalVideoPlayer = ({ sources, showControls = true, className = '' }) => (
  <video
    className={className}
    controls={showControls}
    >
    {sources.map((source, idx) => (
      <source
        key={idx}
        src={source.src}
        type={source.type}
      />
    ))}
  </video>
)

const ExternalVideoPlayer = ({ className, width, height, src, title, className, allow = 'accelerometer;encrypted-media;gyroscope;picture-in-picture', allowFullScreen = true }) => (
  <div className='ext-video-player'>
    <iframe
      title={title}
      className={className}
      src={src}
      allow={allow}
      allowfullscreen={allowFullScreen}
      width={width || ''}
      height={height || ''}
    />
  </div>
)

const Video = ({ title = '', isExternalSource = false, sources, src, showControls = true, className = '', allowFullScreen }) => (
  isExternalSource
  ? <ExternalVideoPlayer src={src} className={className} title={title} />
  : <InternalVideoPlayer sources={sources} showControls={showControls} className={className} allowFullScreen={allowFullScreen} />
)

export default Video
