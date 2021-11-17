import React from 'react'
import HomeBanner from './Banner'
import Section1 from './Section_1'
import Speakers from './Speakers'
import Features from './Features'
import Highlights from './Highlights'
import Testimonials from './Testimonials'
import Sponsors from './Sponsors'
import Divider from '../Divider'
import './index.css'

const HomeComponent = () => (
  <section className='section-home'>
    <HomeBanner />
    <section className='section-content section-home-content'>
      <Section1 />
      <Divider className='section-divider' />
      <Speakers />
      <Divider className='section-divider' />
      <Features />
      <Divider className='section-divider' />
      <Highlights />
      <Divider className='section-divider' />
      <Testimonials />
      <Divider className='section-divider' />
      <Sponsors />
      <Divider className='section-divider' />
    </section>
  </section>
)

export default HomeComponent
