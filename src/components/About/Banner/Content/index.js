import React from 'react'
import Header from '../../../Header'
import './index.css'
import HeaderDescription from '../../../HeaderDescription'

const AboutBannerContent = ({ title, description }) => (
  <div className='about-banner-content'>
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
    Reactathon is your chance to connect with 600 like minded engineers on 
    the cutting edge of web development in the heart of San Francisco. 
    Featuring the most up-to-date, relevant, and advanced topics in the presentations,
    complemented by facilitated discussion with speakers, workshop instructors, experts,
    and sponsors.
  `
}

export default AboutBannerContent
