import React from 'react'
import Audio from '../Audio'
import './index.css'

const PodcastPlayer = ({ src }) => (
  <Audio
    sources={[src]}
    type={''}
  />
)

PodcastPlayer.defaultProps = {
  src: 'https://audio.simplecast.com/63a2d5ab.mp3'
}

export default PodcastPlayer
