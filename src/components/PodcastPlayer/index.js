import React, { useState, useEffect, /*useLayoutEffect*/ } from 'react'
import Audio from '../Audio'
import { getScreenWidth } from '../../utils/window'
import { getUserFriendlyTime, getUpdatedSeekTime, getSeekBoundaries } from '../../utils/audio'
import { WIDE_BREAKPOINT, /*NATIVE_BREAKPOINT*/ } from '../../constants'
import './index.css'

const PodcastPlayer = ({ className = '', srcFile, track, artist, type = 'mp3', albumArt }) => {
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
    setPlayerState({
      ...playerState,
      duration: event.currentTarget.duration
    })
  }

  const onPlayPause = () => {
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
    setPlayerState({
      ...playerState,
      currentTime: audioRef.currentTime
    })
  }

  const onToggleMute = () => {
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
    // console.log('onVolumeChange', onVolumeChange)
    // todo
  }

  const onProgressSeek = (e, element) => {
    // console.log('onProgressSeek', playerState)
    const rect = e.target.getBoundingClientRect()
    const { clientX } = e
    const { min, max, move, percent } = getSeekBoundaries({ rect, clientX, element })
    // const min = rect.left

    //const max = rect.right || el.offsetWidth
    //const move = e.clientX
    //const percent =  (move - rect.x) / max

    // console.log('el', el.position, el.offsetTop, el.offsetLeft, el.offsetWidth, e.clientX)
    // console.log('min, max, rect, move, percent', min, max, rect, move, percent)
    const newTime = getUpdatedSeekTime({
      currentTime: playerState.currentTime,
      totalTime: playerState.duration,
      percent: percent
    })
    // Set audio current time
    audioRef.currentTime = newTime
    // Update player state
    setPlayerState({
      ...playerState,
      currentTime: newTime
    })
  }

  const onScroll = (playerState) => {
    // todo
    // console.log('onScroll', playerState)
    // if (playerState.isPlaying) {
    //   console.log('es')
    //   onPlayPause()
    // }
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
        artist={artist}
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
        onScroll={onScroll}
        audioComponent={audioComponent}
      />
    </div>
  )
}

const PodcastTrackInfo = ({ track, artist }) => (
  <div className='podcast-track-info'>
    <span className='podcast-track-info-artist'>{artist}</span><br />
    <span className='podcast-track-info-track'>{track}</span>
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
    <div className='podcast-progress-wrap'>
      <PodcastProgressBar onProgressSeek={onProgressSeek} currentTime={currentTime} duration={duration} />
      <PodcastDuration current={currentTime} total={duration} />
    </div>
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
      role={'none'}
      onKeyPress={() => {}}
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
    <button onClick={onToggleMute} className={`podcast-volume-btn ${isMuted ? 'podcast-volume-off-btn' : 'podcast-volume-on-btn'}`} />
    <progress className='podcast-volume-progress' value={isMuted ? 0 : level} max={1} />
  </div>
)

const PodcastAudio = ({
  audioComponent, track, artist, albumArt,
  src, type = 'mp3', isPlaying = false,
  onPlayPause, volumeLevel, onToggleMute,
  currentTime, isMuted,
  onVolumeChange, duration,
  onScroll,
  onProgressSeek
}) => {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsNative(getScreenWidth() <= WIDE_BREAKPOINT)
      //window.addEventListener('scroll', () => { onScroll(playerState) })
    }
    // return () => {
    //   // Clean up
    //   if (typeof window !== undefined) {
    //     window.removeEventListener('scroll', () => { onScroll(playerState) })
    //   }
    // }
  }, [])

  const desktopLayout = (
    <div className='podcast-audio-wrapper'>
      <div className='podcast-audio-inner'>
        <PodcastAlbum albumArt={albumArt} />
        <PodcastTrackInfo track={track} artist={artist} />
        <PodcastControls isPlaying={isPlaying} onPlayPause={onPlayPause} duration={duration} currentTime={currentTime} onProgressSeek={onProgressSeek} />
        <PodcastVolumeControl isMuted={isMuted} level={volumeLevel} onToggleMute={onToggleMute} onVolumeChange={onVolumeChange} />
      </div>
      {audioComponent}
    </div>
  )
  const nativeLayout = (
    <div className='podcast-audio-wrapper-native'>
      <div className='podcast-audio-inner-native'>
        <PodcastAlbum albumArt={albumArt} />
        <PodcastTrackInfo track={track} album={artist} />
      </div>
      <PodcastControls isPlaying={isPlaying} onPlayPause={onPlayPause} duration={duration} currentTime={currentTime} onProgressSeek={onProgressSeek} />
      <PodcastVolumeControl isMuted={isMuted} level={volumeLevel} onToggleMute={onToggleMute} onVolumeChange={onVolumeChange} />
      {audioComponent}
    </div>
  )
  return isNative ? nativeLayout : desktopLayout
}

export default PodcastPlayer
