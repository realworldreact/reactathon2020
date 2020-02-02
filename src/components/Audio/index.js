import React from 'react'
import './index.css'

const Audio = ({ src, sources, tracks = [{ kind: 'captions' }], showControls = true, className = '' }) => (
  <audio
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
    />
  ))}
  </audio>
)

export default Audio
