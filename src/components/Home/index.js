import React from 'react'
import HomeBanner from './Banner'
import Speakers from './Speakers'
import './index.css'

const HomeComponent = () => (
  <section className='home-section'>
    <HomeBanner />
    <Speakers />
  </section>
)

export default HomeComponent
