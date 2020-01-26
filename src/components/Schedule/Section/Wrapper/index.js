import React from 'react'
import './index.css'

const ScheduleSectionWrapper = ({ sectionId }) => {
  switch (sectionId) {
    default:
    case '#day1':
      return <span>Hello</span>
    case '#day2':
      return <span>Hello</span>
  }
}

export default ScheduleSectionWrapper
