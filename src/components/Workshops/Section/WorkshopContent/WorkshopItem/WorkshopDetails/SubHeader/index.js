import React from 'react'
import DurationIcon from '../../../../../../../assets/icons/about/clock-icon-about.svg'
import CalendarIcon from '../../../../../../../assets/icons/about/calendar-icon-about.svg'
import './index.css'

const WorkshopDetailItemLevel = ({ level }) => (
  <div className='workshop-detail-item-level'>
    {level}
  </div>
)

const WorkshopDetailItemDate = ({ day }) => (
  <div>
    {day}
  </div>
)

const WorkshopDetailItemDuration = ({ day, length }) => (
  <div className='workshop-detail-item-duration'>
    <img src={CalendarIcon} alt='calendar icon' className='workshop-detail-item-duration-icon' />
    &nbsp;&nbsp;
    {day}
    &nbsp;&nbsp;
    <img src={DurationIcon} alt='clock-length' className='workshop-detail-item-duration-icon' />
    &nbsp;&nbsp;
    {length}
  </div>
)

const WorkshopDetailItemSubHeader = ({ level, day, length }) => (
  <div className='workshop-detail-item-sub-header'>
    <WorkshopDetailItemLevel level={level} />
    {/* <WorkshopDetailItemDate day={day} /> */}
    <WorkshopDetailItemDuration day={day} length={length} />
  </div>
)

export default WorkshopDetailItemSubHeader
