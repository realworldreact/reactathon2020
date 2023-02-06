import React from 'react'
import WorkshopsBanner from './Banner'
// import WorkshopsSectionWrapper from './Section/Wrapper'
import './index.css'

const Schedule = () => (
  <section className="section-workshops">
    <WorkshopsBanner />
    <h3 className="workshop-coming-soon">Workshops coming soon</h3>
    {/* <section className='section-content section-workshops-content'>
      <WorkshopsSectionWrapper />
    </section> */}
  </section>
)

export default Schedule
