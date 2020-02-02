import React from 'react'
import Audio from '../Audio'
import './index.css'

const PodcastPlayer = ({ src, type = 'mp3' }) => (
  <Audio
    className='podcast-player'
    src={src}
    sources={[{
      src,
      type
    }]}
  />
)

PodcastPlayer.defaultProps = {
  src: 'https://audio.simplecast.com/63a2d5ab.mp3'
}

export default PodcastPlayer
