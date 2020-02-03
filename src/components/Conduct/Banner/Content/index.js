import React from 'react'
import Header from '../../../Header'
import HeaderDescription from '../../../HeaderDescription'
import headerData from '../../../../assets/data/code-of-conduct/header.json'
import './index.css'

const ConductBannerContent = ({ title, description }) => (
  <div className='section-content-only conduct-banner-content'>
    <Header
      className='conduct-banner-content-header'
      text={title}
      showDot={true}
    />
    <HeaderDescription
      text={description}
      className='conduct-banner-content-description'
    />
  </div>
)

ConductBannerContent.defaultProps = {
  title: headerData.title,
  description: headerData.description
}

export default ConductBannerContent
