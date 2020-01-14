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
    <Speakers />
    <Features />
    <Highlights />
    <Sponsors />
  </section>
)

export default HomeComponent
