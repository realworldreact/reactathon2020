import React from 'react'
import WorkshopDetailItemHeader from './Header'
import WorkshopDetailItemSubHeader from './SubHeader'
import './index.css'

const WorkshopDetails = ({ headline, time, level, length }) => (
  <div className='workshop-item-details'>
    <WorkshopDetailItemHeader title={headline} time={time} />
    <WorkshopDetailItemSubHeader level={level} length={length} />
  </div>
)

export default WorkshopDetails
