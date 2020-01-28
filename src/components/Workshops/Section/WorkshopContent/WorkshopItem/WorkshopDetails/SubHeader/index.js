import React from 'react'
import DurationIcon from '../../../../../../../assets/icons/About/clock-icon-about.svg'
import './index.css'

const WorkshopDetailItemLevel = ({ level }) => (
  <div className='workshop-detail-item-level'>
    {level}
  </div>
)

const WorkshopDetailItemDuration = ({ length }) => (
  <div className='workshop-detail-item-duration'>
    <img src={DurationIcon} alt='clock-length' className='workshop-detail-item-duration-icon' />
    &nbsp;&nbsp;
    {length}
  </div>
)

const WorkshopDetailItemSubHeader = ({ level, length }) => (
  <div className='workshop-detail-item-sub-header'>
    <WorkshopDetailItemLevel level={level} />
    <WorkshopDetailItemDuration length={length} />
  </div>
)

export default WorkshopDetailItemSubHeader
