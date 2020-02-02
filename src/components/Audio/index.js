import React from 'react'
import './index.css'

const Audio = ({ sources, tracks, showControls = true, className = '' }) => (
  <audio
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
  {tracks.map((track, idx) => (
    <source
      key={idx}
      src={track.src}
      type={track.type}
      srclang={track.srclang}
      lable={track.label}
    />
  ))}
  </audio>
)

export default Audio
