import React from 'react'
import ScheduleBanner from './Banner'
import ScheduleNav from './Nav'
import ScheduleSectionWrapper from './Section/Wrapper'
import { getLocationHash } from '../../utils/window'
import './index.css'

const Schedule = () => (
  <section className='section-schedule'>
    <ScheduleBanner />
    <ScheduleNav />
    <section className='section-content section-schedule-content'>
      <ScheduleSectionWrapper sectionId={getLocationHash()} />
    </section>
  </section>
)

export default Schedule
