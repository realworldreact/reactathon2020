import React from 'react'
import './index.css'

const Audio = ({ elRef, src, sources, tracks = [{ kind: 'captions' }], showControls = false, onPlay, onVolumeChange, onTimeUpdate, className = '' }) => (
  <audio
    ref={el => elRef(el)}
    onPlay={onPlay}
    onTimeUpdate={onTimeUpdate}
    onVolumeChange={onVolumeChange}
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
      srcLang={track.srclang}
      label={track.label}
    />
  ))}
  </audio>
)

export default Audio
