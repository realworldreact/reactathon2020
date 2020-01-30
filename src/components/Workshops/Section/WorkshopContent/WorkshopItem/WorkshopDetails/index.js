import React from 'react'
import WorkshopDetailItemHeader from './Header'
import WorkshopDetailItemSubHeader from './SubHeader'
import WorkshopDetailContent from './Content'
import WorkshopsDetailBuyTickets from './BuyTickets'
import './index.css'

const WorkshopDetails = ({
  headline, time, level, length,
  paragraphOne, bulletsOne, paragraphTwo, bulletsTwo,
  paragraphThree, buyTicketsUri
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
    <WorkshopsDetailBuyTickets href={buyTicketsUri} />
  </div>
)

export default WorkshopDetails
