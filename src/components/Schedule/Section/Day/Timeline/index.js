import React from 'react'
import './index.css'

const DayTimelineItem = ({ time, label, className }) => (
  <div className='schedule-day-timeline-item'>
    <span>{time}</span>
    &nbsp;
    <span>{label}</span>
  </div>
)
const DayTimeline = ({ timeline }) => (
  <div className='schedule-day-timeline'>
    {timeline.map((item, idx) => (
       <DayTimelineItem
        key={idx}
        time={item.time}
        label={item.label}
       />
    ))}
  </div>
)

export default DayTimeline
