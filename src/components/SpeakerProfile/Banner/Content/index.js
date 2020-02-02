import React from 'react'
import Header from '../../../Header'
import HeaderDescription from '../../../HeaderDescription'
import './index.css'

const SpeakerProfileBannerContent = ({ title, description }) => (
  <div className='section-content-only workshops-banner-content'>
    <Header
      className='workshops-banner-content-header'
      text={title}
      showDot={true}
    />
    <HeaderDescription
      text={description}
      className='workshops-banner-content-description'
    />
  </div>
)

SpeakerProfileBannerContent.defaultProps = {
  title: '',
  description: ''
}

export default SpeakerProfileBannerContent
