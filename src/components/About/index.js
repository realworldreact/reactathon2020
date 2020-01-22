import React from 'react'
import AboutBanner from './Banner'
import AboutNav from './Nav'
import AboutSectionWrapper from './Section/Wrapper'
import { getLocationHash } from '../../utils/window'
import './index.css'

const AboutComponent = () => (
  <section className='section-about'>
    <AboutBanner />
    <AboutNav />
    <hr className='section-divider section-divider-about-nav' />
    <section className='section-content section-about-content'>
      <AboutSectionWrapper sectionId={getLocationHash()} />
    </section>
  </section>
)

export default AboutComponent
