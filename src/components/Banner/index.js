import React from 'react'
import Video from '../Video'
import { getScreenWidth } from '../../utils/window'
import { VIDEO_LOAD_BREAKPOINT } from '../../constants'
import './index.css'

const Banner = ({ bannerClassName = '', content, video }) => {
  const shouldLoadVideo = getScreenWidth() > VIDEO_LOAD_BREAKPOINT
  return (
    video && shouldLoadVideo
    ? (
      <div>
        <div className='banner-wrapper'>
          {video && (
            <div className='banner-video-wrapper'>
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
          <div className='banner-content-overlay-wrapper'>
            {content}
          </div>
        </div>
      </div>
    )
    : (
      <div className={`banner banner-content ${bannerClassName}`}>
        {content}
      </div>
    )
  )
}

export default Banner
