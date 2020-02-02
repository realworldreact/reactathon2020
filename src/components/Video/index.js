import React from 'react'
import './index.css'

const InternalVideoPlayer = ({ preload = true, loop = false, src, sources = [], tracks = [{ kind: 'captions' }], showControls = true, className = '', autoPlay, muted }) => (
  <video
    preload={preload}
    autoPlay={autoPlay}
    muted={muted}
    className={className}
    controls={showControls}
    loop={loop}
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

const Video = ({ preload = true, loop = false, autoPlay = false, muted = false, title = '', isExternalSource = false, sources, tracks, src, showControls = true, className = '', allowFullScreen = true }) => (
  isExternalSource
  ? <ExternalVideoPlayer src={src} className={className} title={title} />
  : <InternalVideoPlayer preload={true} loop={loop} autoPlay={autoPlay} muted={muted} src={src} sources={sources} tracks={tracks} showControls={showControls} className={className} allowFullScreen={allowFullScreen} />
)

export default Video
