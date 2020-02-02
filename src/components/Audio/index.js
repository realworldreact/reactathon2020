import React from 'react'
import './index.css'

const Audio = ({ sources, tracks = [{ kind: 'captions' }], showControls = true, className = '' }) => (
  <audio
    className={className}
    controls={showControls}
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
    <source
      key={idx}
      src={track.src}
      kind={track.kind}
      srclang={track.srclang}
      label={track.label}
    />
  ))}
  </audio>
)

export default Audio
