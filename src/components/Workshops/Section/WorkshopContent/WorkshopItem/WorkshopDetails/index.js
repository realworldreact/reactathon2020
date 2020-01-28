import React from 'react'
import './index.css'

const WorkshopDetailTitle = ({ text }) => (
  <div className='workshop-item-details-title'>
     {text}
  </div>
)

const WorkshopDetailItemHeader = ({ title, time }) => {
  const hour = time ? time.substring(0, time.length - 2) : ''
  const tod = time ? (time.indexOf('am') !== -1 ? 'am' : 'pm') : ''

  return (
    <div className='workshop-item-details-header'>
      <WorkshopDetailTime time={time} tod={tod} />
      <WorkshopDetailTitle text={title} />
    </div>
  )
}

const WorkshopDetailTime = ({ hour, timeOfDay }) => (
  <div className='workshop-item-details-time'>
    <div className='workshop-item-details-time-hour'>
      {hour || '9:00'}
    </div>
    <div className='workshop-item-details-time-tod'>
      {timeOfDay || 'am'}
    </div>
  </div>
)

const WorkshopDetails = ({ headline, time }) => (
  <div className='workshop-item-details'>
    <WorkshopDetailItemHeader title={headline} time={time} />
  </div>
)

export default WorkshopDetails
