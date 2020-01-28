import React from 'react'
import WorkshopDetailItemHeader from './Header'
import WorkshopDetailItemSubHeader from './SubHeader'
import WorkshopDetailContent from './Content'
import './index.css'

const WorkshopDetails = ({
  headline, time, level, length,
  paragraphOne, bulletsOne, paragraphTwo, bulletsTwo,
  paragraphThree
}) => (
  <div className='workshop-item-details'>
    <WorkshopDetailItemHeader title={headline} time={time} />
    <WorkshopDetailItemSubHeader level={level} length={length} />
    <WorkshopDetailContent
      paragraphOne={paragraphOne}
      paragraphTwo={paragraphTwo}
      paragraphThree={paragraphThree}
      bulletsOne={bulletsOne}
      bulletsTwo={bulletsTwo}
    />
  </div>
)

export default WorkshopDetails
