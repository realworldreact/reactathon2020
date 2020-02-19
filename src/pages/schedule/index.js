import React from 'react'
import LayoutWrapper from '../../layouts/layout-wrapper'
import ScheduleComponent from '../../components/Schedule'

const Schedule = ({ sectionId }) => (
  <LayoutWrapper>
    <ScheduleComponent sectionId={sectionId} />
  </LayoutWrapper>
)

export default Schedule
