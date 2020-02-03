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
    Reactathon is your chance to connect with hundreds of like-minded engineers on
    the cutting edge of web development in the heart of San Francisco.
    With the most up-to-date, relevant, and advanced topics in the presentations,
    complemented by facilitated discussion with speakers, workshop instructors, experts,
    and sponsors, we guarantee that you'll take something relevant and beneficial
    back to the office.
  `
}

export default AboutBannerContent
