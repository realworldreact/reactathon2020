import React from 'react'
import Header from '../../../Header'
import HeaderDescription from '../../../HeaderDescription'
import data from '../../../../assets/data/schedule/header.json'
import './index.css'

const ScheduleBannerContent = ({ title, description }) => (
  <div className='section-content-only schedule-banner-content'>
    <Header
      className='schedule-banner-content-header'
      text={title}
      showDot={true}
    />
    <HeaderDescription
      text={description}
      className='schedule-banner-content-description'
    />
  </div>
)

ScheduleBannerContent.defaultProps = {
  title: data.title,
  description: data.description
}

export default ScheduleBannerContent
