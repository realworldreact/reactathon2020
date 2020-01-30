import React from 'react'
import LineButton from '../../../../../../LineButton'
import './index.css'

const WorkshopsDetailBuyTickets = ({ text = 'Buy tickets for this workshop', href, target = '_blank'}) => (
  <div className='workshops-detail-buy-tickets'>
    <LineButton
      text={text}
      className='workshops-detail-buy-tickets-btn'
      href={href}
      isExternalLink={true}
      target={target}
    />
  </div>
)

export default WorkshopsDetailBuyTickets
