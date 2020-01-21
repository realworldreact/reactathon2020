import React from 'react'
import HomeBanner from './Banner'
import Speakers from './Speakers'
import Features from './Features'
import Highlights from './Highlights'
import Sponsors from './Sponsors'
import './index.css'

const HomeComponent = () => (
  <section className='section-home'>
    <HomeBanner />
    <section className='section-content section-home-content'>
      <Speakers />
      <hr className='section-divider' />
      <Features />
      <hr className='section-divider' />
      <Highlights />
      <hr className='section-divider' />
      <Sponsors />
      <hr className='section-divider' />
    </section>
  </section>
)

export default HomeComponent
