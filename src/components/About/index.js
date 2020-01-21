import React from 'react'
import AboutBanner from './Banner'
import './index.css'

const AboutComponent = () => (
  <section className='section-about'>
    <AboutBanner />
    <section className='section-content section-about-content'>
      Hello world!
    </section>
  </section>
)

export default AboutComponent
