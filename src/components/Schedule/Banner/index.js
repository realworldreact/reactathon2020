import React from 'react'
import Banner from '../../Banner'
import ScheduleBannerContent from './Content'
import './index.css'

const ScheduleBanner = () => (
  <Banner
    className='banner-content-page schedule-banner banner-overlay'
    content={<ScheduleBannerContent />}
  />
)

export default ScheduleBanner
