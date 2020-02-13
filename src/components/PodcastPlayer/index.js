import React, { useState } from 'react'
import Audio from '../Audio'
import PodcastMap from './podcast-map'
import { getUserFriendlyTime, getUpdatedSeekTime } from '../../utils/audio'
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

  let audioRef = null
  const [playerState, setPlayerState] = useState(defaultState)

  /* Event Handlers */
  const onLoadedMetadata = (event) => {
    console.log('onLoadedMetadata', event)
    setPlayerState({
      ...playerState,
      duration: event.currentTarget.duration
    })
  }

  const onPlayPause = () => {
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
  }

  const onTimeUpdate = () => {
    console.log('onTimeUpdate', playerState)
    setPlayerState({
      ...playerState,
      currentTime: audioRef.currentTime
    })
  }

  const onToggleMute = () => {
    console.log('onTogglemute', playerState, audioRef.volume)
    const newValue = !playerState.isMuted
    if (newValue) { // muted
      audioRef.volume = 0
    } else {
      audioRef.volume = playerState.volume
    }
    setPlayerState({
      ...playerState,
      isMuted: newValue
    })
  }

  const onVolumeChange = () => {
    console.log('onVolumeChange', onVolumeChange)
  }

  const onProgressSeek = (e, el) => {
    // const al = document.getElementById('podcast-progress')
    console.log('onProgressSeek', playerState)
    const rect = e.target.getBoundingClientRect()
    const min = rect.left
    const max = rect.right || el.offsetWidth
    const move = e.clientX
    const percent =  (move - rect.x) / max
    console.log('el', el.position, el.offsetTop, el.offsetLeft, el.offsetWidth, e.clientX)
    console.log('min, max, rect, move, percent', min, max, rect, move, percent)
    const newTime = getUpdatedSeekTime({
      currentTime: playerState.currentTime,
      totalTime: playerState.duration,
      percent: percent
    })
    audioRef.currentTime = newTime
    setPlayerState({
      ...playerState,
      currentTime: newTime
    })

  }

  /* Components */
  const audioComponent = (
    <Audio
      elRef={el => { audioRef = el }}
      className='podcast-audio'
      src={srcFile}
      onLoadedMetadata={onLoadedMetadata}
      onTimeUpdate={onTimeUpdate}
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
        isMuted={playerState.isMuted}
        isPlaying={playerState.isPlaying}
        duration={playerState.duration}
        currentTime={playerState.currentTime}
        volumeLevel={playerState.volume}
        playerState={playerState}
        onPlayPause={onPlayPause}
        onVolumeChange={onVolumeChange}
        onToggleMute={onToggleMute}
        onProgressSeek={onProgressSeek}
        audioComponent={audioComponent}
      />
    </div>
  )
}

const PodcastTrackInfo = ({ track, album }) => (
  <div className='podcast-track-info'>
    <span className='podcast-track-info-track'>{track}</span><br />
    <span className='podcast-track-info-album'>{album}</span>
  </div>
)

const PodcastAlbum = ({ albumArt }) => (
  <div
    className='podcast-album'
    style={albumArt ? { backgroundImage: `url(${albumArt})` } : {}}
  />
)

const PodcastControls = ({ onPlayPause, isPlaying = false, currentTime, duration, onProgressSeek }) => (
  <div className='podcast-controls'>
    <PodcastPlayPause onPlayPause={onPlayPause} isPlaying={isPlaying} />
    <PodcastProgressBar onProgressSeek={onProgressSeek} currentTime={currentTime} duration={duration} />
    <PodcastDuration current={currentTime} total={duration} />
  </div>
)

const PodcastPlayPause = ({ onPlayPause, isPlaying = false }) => (
  <button
    className={`${isPlaying ? 'podcast-pause-btn' : 'podcast-play-btn'}`}
    onClick={onPlayPause}
  />
)

const PodcastProgressBar = ({ value, currentTime, duration, onProgressSeek }) => {
  let progressRef = null
  return (
    <progress
      id='podcast-progress'
      ref={el => { progressRef = el }}
      onClick={e => onProgressSeek(e, progressRef)}
      className='podcast-control-progress'
      value={currentTime}
      max={duration}
    />
  )
}

const PodcastDuration = ({ current, total }) => (
  <div className='podcast-duration'>
    {getUserFriendlyTime(current)} / {getUserFriendlyTime(total)}
  </div>
)

const PodcastVolumeControl = ({ level, isMuted = false, onToggleMute, onVolumeChange }) => (
  <div className='podcast-volume'>
    <div />
    <button onClick={onToggleMute} className={`podcast-volume-btn ${isMuted ? 'podcast-volume-off-btn' : 'podcast-volume-on-btn'}`} />
    <progress className='podcast-volume-progress' value={isMuted ? 0 : level} max={1} />
  </div>
)

const PodcastAudio = ({
  audioComponent, track, album, albumArt,
  src, type = 'mp3', isPlaying = false,
  onPlayPause, volumeLevel, onToggleMute,
  currentTime, isMuted,
  onVolumeChange, duration,
  onProgressSeek
}) => (
  <div className='podcast-audio-wrapper'>
    <div className='podcast-audio-inner'>
      <PodcastAlbum albumArt={albumArt} />
      <PodcastTrackInfo track={track} album={album} />
      <PodcastControls isPlaying={isPlaying} onPlayPause={onPlayPause} duration={duration} currentTime={currentTime} onProgressSeek={onProgressSeek} />
      <PodcastVolumeControl isMuted={isMuted} level={volumeLevel} onToggleMute={onToggleMute} onVolumeChange={onVolumeChange} />
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
