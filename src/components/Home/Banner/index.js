import React from 'react'
import Banner from '../../Banner'
import HomeBannerContent from './Content'
// import HomeBannerVideo from '../../../assets/videos/home-header-video.mp4'
// import HomeBannerVideoPoster from '../../../assets/images/home/header/home-header-placeholder.jpg'
// import HomeBannerMobileVideoPoster from '../../../assets/images/home/header/home-header-mobile.jpg'
import './index.css'

const HomeBanner = ({ video }) => (
  <Banner
    video={video}
    className='home-banner banner-overlay'
    content={<HomeBannerContent />}
  />
)

HomeBanner.defaultProps = {
  // video: {
  //   src: HomeBannerVideo,
  //   poster: HomeBannerVideoPoster,
  //   mobilePoster: HomeBannerMobileVideoPoster
  // }
}

export default HomeBanner
