import React from 'react'
import ConductBanner from './Banner'
import ConductSection from './Section'
import './index.css'

const Conduct = () => (
  <section className='section-conduct'>
    <ConductBanner />
    <section className='section-content section-conduct-content'>
      <ConductSection />
    </section>
  </section>
)

export default Conduct
