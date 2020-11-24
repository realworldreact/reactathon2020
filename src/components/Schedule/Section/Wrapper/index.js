import React from 'react'
import Day from '../Day'
import './index.css'

const ScheduleSectionWrapper = ({ sectionId }) => {
  switch (sectionId) {
    default:
    case 'day-1':
    case 'day1':
    case 'day-2':
    case 'day2':
    case 'day-3':
    case 'day3':
      return <Day id={sectionId} />
  }
}

export default ScheduleSectionWrapper
