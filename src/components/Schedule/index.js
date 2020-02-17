import React from 'react'
import ScheduleBanner from './Banner'
import ScheduleNav from './Nav'
import ScheduleSectionWrapper from './Section/Wrapper'
import './index.css'

const Schedule = ({ sectionId }) => (
  <section className='section-schedule'>
    <ScheduleBanner />
    <ScheduleNav />
    <section className='section-content section-schedule-content'>
      <ScheduleSectionWrapper sectionId={sectionId} />
    </section>
  </section>
)

export default Schedule
