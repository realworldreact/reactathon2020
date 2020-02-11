import React, { useState } from 'react'
import Audio from '../Audio'
import './index.css'

const PodcastPlayer = ({ className = '', src, track, album, type = 'mp3', albumArt }) => {
  const defaultState = {
    isPlaying: false
  }
  const [playerState, setPlayerState] = useState(defaultState)
  let audioRef = null
  const audioComponent = (
    <Audio
      ref={audioRef}
      className='podcast-audio'
      src={src}
      sources={[{
        src,
        type
      }]}
    />
  )
  return (
    <div className={`podcast-audio ${className}`}>
      <PodcastAudio
        track={track}
        album={album}
        src={src}
        type={type}
        albumArt={albumArt}
        isPlaying={playerState.isPlaying}
        onPlayPause={() => {
          console.log('audioRef', audioRef)
          if (playerState.isPlaying) {
            audioRef.src = null
          } else {
            audioRef.src = src
            audioRef.play()
          }
          setPlayerState({
            ...defaultState,
            isPlaying: !playerState.isPlaying
          })
        }}
        onVolumeChange={() => {}}
        onToggleMute={() => {}}
        audioComponent={audioComponent}
      />
    </div>
  )
}

const PodcastTrackInfo = ({ track, album }) => (
  <div className='podcast-track-info'>
    <span>{track}</span><br />
    <span>{album}</span>
  </div>
)

const PodcastAlbum = ({ albumArt }) => (
  <div
    className='podcast-album'
    style={albumArt ? { backgroundImage: `url(${albumArt})` } : {}}
  />
)

const PodcastControls = ({ onPlayPause, isPlaying = false, duration }) => (
  <div className='podcast-controls'>
    <PodcastPlayPause onPlayPause={onPlayPause} isPlaying={isPlaying} />
    <PodcastProgressBar />
  </div>
)

const PodcastPlayPause = ({ onPlayPause, isPlaying = false }) => (
  <button
    className={`${isPlaying ? 'podcast-pause-btn' : 'podcast-play-btn'}`}
    onClick={onPlayPause}
  />
)

const PodcastProgressBar = ({ value }) => (
  <progress
    className='podcast-control-progress'
    value={value}
    max={1}
  />
)

const PodcastVolumeControl = ({ level, isMuted = false, onToggleMute, onVolumeChange }) => (
  <div className='podcast-volume'>
    <div />
    <button className={`podcast-volume-btn ${isMuted ? 'podcast-volume-off-btn' : 'podcast-volume-on-btn'}`} />
    <progress className='podcast-volume-progress' value={level} max={1} />
  </div>
)

const PodcastAudio = ({ audioComponent, track, album, albumArt, src, type = 'mp3', isPlaying = false, onPlayPause, volumeLevel,  onToggleMute, onVolumeChange }) => (
  <div className='podcast-audio-wrapper'>
    <div className='podcast-audio-inner'>
      <PodcastAlbum albumArt={albumArt} />
      <PodcastTrackInfo track={track} album={album} />
      <PodcastControls isPlaying={isPlaying} onPlayPause={onPlayPause} duration={1} />
      <PodcastVolumeControl level={volumeLevel} onToggleMute={onToggleMute} onVolumeChange={onVolumeChange} />
    </div>
    {audioComponent}
  </div>
)

PodcastPlayer.defaultProps = {
  src: 'https://audio.simplecast.com/63a2d5ab.mp3',
  track: 'David Khourshid',
  album: 'The React Podcast',
}

export default PodcastPlayer
