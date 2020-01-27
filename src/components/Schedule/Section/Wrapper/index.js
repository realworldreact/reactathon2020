import React from 'react'
import Day from '../Day'
import './index.css'

const ScheduleSectionWrapper = ({ sectionId }) => {
  switch (sectionId) {
    default:
    case '#day1':
    case '#day2':
      return <Day id={sectionId} />
  }
}

export default ScheduleSectionWrapper
