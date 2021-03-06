import React from 'react'
import Banner from '../../Banner'
import AboutBannerContent from './Content'
import './index.css'

const AboutBanner = () => (
  <Banner
    className='banner-content-page about-banner banner-overlay'
    content={<AboutBannerContent />}
  />
)

export default AboutBanner
