import React from 'react'
import Header from '../../../Header'
import HeaderDescription from '../../../HeaderDescription'
import data from '../../../../assets/data/workshops/header.json'
import './index.css'

const WorkshopsBannerContent = ({ title, description }) => (
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

WorkshopsBannerContent.defaultProps = {
  title: data.title,
  description: data.description
}

export default WorkshopsBannerContent
