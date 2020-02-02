import React from 'react'
import Video from '../Video'
import { getScreenWidth } from '../../utils/window'
import { VIDEO_LOAD_BREAKPOINT } from '../../constants'
import './index.css'

const Banner = ({ className = '', content, video }) => {
  const shouldLoadVideo = getScreenWidth() > VIDEO_LOAD_BREAKPOINT
  return (
    video && shouldLoadVideo
    ? (
      <div className='banner-wrap'>
        {video && (
          <div className='banner-video-wrap'>
            <Video
              className='banner-video'
              loop={true}
              autoPlay
              muted
              showControls={false}
              src={video && (shouldLoadVideo && video.src)}
              poster={video && (shouldLoadVideo ? video.poster : video.mobilePoster)}
              isExternalSource={false}
            />
          </div>
        )}
        <div className='banner-content-overlay'>
          {content}
        </div>
      </div>
    )
    : (
      <div className={`banner banner-content ${className}`}>
      {content}
      </div>
    )
  )
}

export default Banner
