import React from 'react'
import './index.css'

const InternalVideoPlayer = ({ src, sources = [], tracks = [{ kind: 'captions' }], showControls = true, className = '' }) => (
  <video
    className={className}
    controls={showControls}
    src={src}
  >
    <track kind='captions' />
    {sources.map((source, idx) => (
      <source
        key={idx}
        src={source.src}
        type={source.type}
      />
    ))}
    {tracks.map((track, idx) => (
      <track
        key={idx}
        src={track.src}
        kind={track.kind}
        srclang={track.srclang}
        label={track.label}
        default={track.isDefault}
      />
    ))}
  </video>
)

const ExternalVideoPlayer = ({ className, width, height, src, title, allow = 'accelerometer;encrypted-media;gyroscope;picture-in-picture', allowFullScreen = true }) => (
  <div className='ext-video-player'>
    <iframe
      title={title}
      className={className}
      src={src}
      allow={allow}
      allowFullScreen={allowFullScreen}
      width={width || ''}
      height={height || ''}
    />
  </div>
)

const Video = ({ title = '', isExternalSource = false, sources, tracks, src, showControls = true, className = '', allowFullScreen = true }) => (
  isExternalSource
  ? <ExternalVideoPlayer src={src} className={className} title={title} />
  : <InternalVideoPlayer src={src} sources={sources} tracks={tracks} showControls={showControls} className={className} allowFullScreen={allowFullScreen} />
)

export default Video
