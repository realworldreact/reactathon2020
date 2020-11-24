import React from 'react'
import LineButton from '../../../../../../LineButton'
import './index.css'

const WorkshopsDetailBuyTickets = ({ text = 'Free For Conference Ticketholders', href, target = '_blank'}) => (
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
