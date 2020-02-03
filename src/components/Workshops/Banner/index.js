import React from 'react'
import Banner from '../../Banner'
import WorkshopBannerContent from './Content'
import './index.css'

const WorkshopBanner = () => (
  <Banner
    className='banner-content-page workshops-banner banner-overlay'
    content={<WorkshopBannerContent />}
  />
)

export default WorkshopBanner
