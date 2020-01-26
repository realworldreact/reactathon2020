import React from 'react'
import Header from '../../../Header'
import './index.css'
import HeaderDescription from '../../../HeaderDescription'

const SpeakerBannerContent = ({ title, description }) => (
  <div className='section-content-only speaker-banner-content'>
    <Header
      className='speaker-banner-content-header'
      text={title}
      showDot={true}
    />
    <HeaderDescription
      text={description}
      className='speaker-banner-content-description'
    />
  </div>
)

SpeakerBannerContent.defaultProps = {
  title: 'Speakers',
  description: ''
}

export default SpeakerBannerContent
