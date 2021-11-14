import React from 'react'
import ViewAllSection1 from './ViewAll'
import Section1Content from './SectionContent'
import SectionTitle from '../SectionTitle'
import './index.css'

const Section1 = () => {
  return (
    <section className="section-section1-content">
      <SectionTitle text='Welcome back!' className='title-section1' />
      <Section1Content />
      <ViewAllSection1 />
    </section>
  )
}

export default Section1
