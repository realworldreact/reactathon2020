import React from 'react'
import LayoutWrapper from '../../layouts/layout-wrapper'
import ScheduleComponent from '../../components/Schedule'

const Schedule = (props) => {
  const scheduleSectionId = props['*']
  return (
    <LayoutWrapper>
      <ScheduleComponent sectionId={scheduleSectionId} />
    </LayoutWrapper>
  )
}

export default Schedule
