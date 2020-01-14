import React from 'react'
import SectionTitle from '../SectionTitle'
import FeaturesGrid from './Grid'
import './index.css'

const Features = () => (
  <section className='section-features'>
    <SectionTitle text='Features' className='title-features' />
    <FeaturesGrid />
  </section>
)

export default Features
