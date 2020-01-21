import React from 'react'
import AboutBanner from './Banner'
import './index.css'
import AboutNav from './Nav'

const AboutComponent = () => (
  <section className='section-about'>
    <AboutBanner />
    <AboutNav />
    <hr className='section-divider section-divider-about-nav' />
    <section className='section-content section-about-content'>
      Hello World
    </section>
  </section>
)

export default AboutComponent
