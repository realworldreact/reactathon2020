import React from 'react'
import Banner from '../../Banner'
import AboutBannerContent from './Content'
import './index.css'

const AboutBanner = () => (
  <Banner   
    className='about-banner'
    content={<AboutBannerContent />}
  />
)

export default AboutBanner
