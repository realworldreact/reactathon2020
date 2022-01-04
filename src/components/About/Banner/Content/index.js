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
  Since 2017, Reactathon has brought frontend and fullstack engineers together to learn,
  connect, and inspire. For 2022, we return in-person at a beautiful outdoor venue in
  San Francisco's East Bay. With the addition of the optional Serverless in the Park on May 5,
  you'll enjoy 2.5 days of talks from industry leaders, 6 different workshops, and true
  connections with your peers. There's so much to look forward to & experience! 
  `
}

export default AboutBannerContent
