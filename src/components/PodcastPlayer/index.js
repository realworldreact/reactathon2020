import React, { useState } from 'react'
import Audio from '../Audio'
import PodcastMap from './podcast-map'
import './index.css'

console.log('IMPORTS', PodcastMap.sample)

const PodcastPlayer = ({ className = '', srcFile, track, album, type = 'mp3', albumArt }) => {
  console.log('introsrc', srcFile)
  const defaultState = {
    isPlaying: false,
    currentTime: 0,
    duration: null,
    isMuted: false,
    volume: 1
  }
  const [playerState, setPlayerState] = useState(defaultState)
  let audioRef = null
  const audioComponent = (
    <Audio
      elRef={el => { audioRef = el; console.log('audioRef2', audioRef) }}
      className='podcast-audio'
      src={srcFile}
      sources={[{
        srcFile,
        type
      }]}
    />
  )
  return (
    <div className={`podcast-audio ${className}`}>
      <PodcastAudio
        track={track}
        album={album}
        src={srcFile}
        type={type}
        albumArt={albumArt}
        isPlaying={playerState.isPlaying}
        onPlayPause={() => {
          console.log('playerState', playerState, audioRef)
          let currentTime =  audioRef.currentTime
          if (playerState.isPlaying) {
            audioRef.pause()
          } else {
            if (!audioRef.src) {
              audioRef.src = srcFile
            }
            audioRef.play()
          }
          setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
            currentTime: currentTime
          })
        }}
        onVolumeChange={() => {

        }}
        onToggleMute={() => {
          console.log('onTogglemute', playerState, audioRef.volume)
          const newValue = !playerState.isMuted
          if (newValue) { // muted
            audioRef.volume = 0
          } else {
            audioRef.voume = playerState.volume
          }
          setPlayerState({
            ...playerState,
            isMuted: newValue
          })
        }}
        onTimeUpdate={() => {}}
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

const PodcastControls = ({ onPlayPause, isPlaying = false, currentTime, duration }) => (
  <div className='podcast-controls'>
    <PodcastPlayPause onPlayPause={onPlayPause} isPlaying={isPlaying} />
    <PodcastProgressBar />
    <PodcastDuration current={currentTime} total={duration} />
  </div>
)

const PodcastPlayPause = ({ onPlayPause, isPlaying = false }) => (
  <button
    className={`${isPlaying ? 'podcast-pause-btn' : 'podcast-play-btn'}`}
    onClick={onPlayPause}
  />
)

const PodcastProgressBar = ({ value, currentTime, duration }) => (
  <progress
    className='podcast-control-progress'
    value={value}
    max={1}
  />
)

const PodcastDuration = ({ current, total }) => (
  <div className='podcast-duration'>
    {current} / {total}
  </div>
)

const PodcastVolumeControl = ({ level, isMuted = false, onToggleMute, onVolumeChange }) => (
  <div className='podcast-volume'>
    <div />
    <button onClick={onToggleMute} className={`podcast-volume-btn ${isMuted ? 'podcast-volume-off-btn' : 'podcast-volume-on-btn'}`} />
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
  srcFile: PodcastMap.sample,
  track: 'David Khourshid',
  album: 'The React Podcast',
}

export default PodcastPlayer
