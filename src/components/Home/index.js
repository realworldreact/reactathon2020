import React from 'react'
import HomeBanner from './Banner'
import Speakers from './Speakers'
import Features from './Features'
import Highlights from './Highlights'
import Sponsors from './Sponsors'
import Divider from '../Divider'
import './index.css'

const HomeComponent = () => (
  <div>
    <HomeBanner />
    <section className='section-home'>
      <section className='section-content section-home-content'>
        <Speakers />
        <Divider className='section-divider' />
        <Features />
        <Divider className='section-divider' />
        <Highlights />
        <Divider className='section-divider' />
        <Sponsors />
        <Divider className='section-divider' />
      </section>
    </section>
  </div>
)

export default HomeComponent
