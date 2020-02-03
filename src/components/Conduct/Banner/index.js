import React from 'react'
import Banner from '../../Banner'
import ConductBannerContent from './Content'
import './index.css'

const ConductBanner = () => (
  <Banner
    className='banner-content-page conduct-banner banner-overlay'
    content={<ConductBannerContent />}
  />
)

export default ConductBanner
