import React from 'react'
import AboutBanner from './Banner'
import AboutNav from './Nav'
import AboutSectionWrapper from './Section/Wrapper'
import './index.css'

const AboutComponent = ({ sectionId , subRouteId }) => (
  <section className='section-about'>
    <AboutBanner />
    <AboutNav />
    <section className='section-content section-about-content'>
      <AboutSectionWrapper sectionId={sectionId} subRouteId={subRouteId} />
    </section>
  </section>
)

export default AboutComponent
