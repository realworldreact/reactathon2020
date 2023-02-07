import React from 'react'
import Header from '../../../Header'
import './index.css'
import HeaderDescription from '../../../HeaderDescription'

const AboutBannerContent = ({ title, description }) => (
  <div className='section-content-only about-banner-content'>
    <Header
      className='about-banner-content-header'
      text={title}
      showDot={true}
    />
    <HeaderDescription
      text={description}
      className='about-banner-content-description'
    />
  </div>
)

AboutBannerContent.defaultProps = {
  title: 'About',
  description: `
  Since 2017, Reactathon has brought frontend and fullstack engineers together to learn, connect, and inspire. For 2023, we return to San Francisco in the beautiful, clean, and safe neighborhoods of Pacific Heights & Japantown. Join us for advanced technical presentations, facilitated conversation, & an abundance of webdev fun! 
  `
}

export default AboutBannerContent
