import React from 'react'
import './index.css'

const Audio = ({ sources, showControls = true, className = '' }) => (
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
  </audio>
)

export default Audio
