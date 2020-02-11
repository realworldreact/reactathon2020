import React from 'react'
import Audio from '../Audio'
import './index.css'

const PodcastPlayer = ({ className = '', src, type = 'mp3' }) => (
  <div className={`podcast-audio ${className}`}>
    <PodcastAudio
      src={src}
      type={type}
    />
  </div>
)

const PodcastAudio = ({ src, type = 'mp3' }) => (
  <div className='podcast-audio-wrapper'>
    <div className='podcast-audio-inner'>
      <div className='podcast-play-btn'></div>
      <Audio
        className='podcast-audio'
        showControls={false}
        src={src}
        sources={[{
          src,
          type
        }]}
      />
    </div>
  </div>
)

PodcastPlayer.defaultProps = {
  src: 'https://audio.simplecast.com/63a2d5ab.mp3'
}

export default PodcastPlayer
