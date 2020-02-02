import React from 'react'

import DateIcon from '../../../../assets/icons/about/calendar-icon-about.svg'
import TimeIcon from '../../../../assets/icons/about/clock-icon-about.svg'
import './index.css'

const AboutSectionDateTime = ({ className, date, time }) => (
  <div className={`about-section-datetime ${className}`}>
    <img alt='date' src={DateIcon} />
    {date}
    &nbsp;&nbsp;
    <img alt='time' src={TimeIcon} />
    {time}
  </div>
)

export default AboutSectionDateTime
