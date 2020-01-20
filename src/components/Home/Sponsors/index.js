import React from 'react'
import SectionTitle from '../SectionTitle'
import SponsorGrid from './Grid'
import './index.css'

const Sponsors = () => (
  <section className='section-sponsors'>
    <SectionTitle text='Sponsors' className='title-sponsors' />
    <SponsorGrid />
  </section>
)

export default Sponsors
