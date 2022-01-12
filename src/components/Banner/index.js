import React, { useState, useEffect } from 'react'
import Video from '../Video'
import { getScreenWidth } from '../../utils/window'
import { NATIVE_BREAKPOINT } from '../../constants'
import heroBg from '../../assets/images/home/header/hero-background.jpg'
import './index.css'

const Banner = ({ className = '', content, video }) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      setShouldLoadVideo(getScreenWidth() > NATIVE_BREAKPOINT)
    }
  }, [])

  return video && shouldLoadVideo ? (
    <div className='banner' style={{ backgroundImage: `url(${heroBg})` }}>
      <div className='banner-video-wrap'>
        {/* <div className='banner-video-overlay'></div> */}
        {video && (
          <Video
            className='banner-video'
            loop={true}
            autoPlay
            muted
            showControls={false}
            src={video.src}
            poster={video.poster}
            isExternalSource={false}
          />
        )}
        <div className='banner-content-overlay'>{content}</div>
      </div>
    </div>
  ) : (
    <div className={`banner banner-content ${className}`}>{content}</div>
  )
}

export default Banner
