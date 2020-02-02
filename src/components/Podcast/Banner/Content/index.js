import React from 'react'
import Header from '../../../Header'
import './index.css'
import HeaderDescription from '../../../HeaderDescription'

const PodcastBannerContent = ({ title, description }) => (
  <div className='section-content-only podcast-banner-content'>
    <Header
      className='podcast-banner-content-header'
      text={title}
      showDot={true}
    />
    <HeaderDescription
      text={description}
      className='podcast-banner-content-description'
    />
  </div>
)

PodcastBannerContent.defaultProps = {
  title: '',
  description: ''
}

export default PodcastBannerContent
