import React from 'react'
import Link from '../../Link'
import './index.css'
import { BUY_TICKETS_URI } from '../../../constants'

const BuyTickets = () => (
  <section id='buy-tickets-section' className='buy-tickets-section'>
    <div className='buy-tickets-left'>
      <h1 className='buy-tickets-header'>
        Don't wait <br />
        <span className='buy-tickets-header-subtext'>
          Get yours before they're gone.
        </span>
      </h1>
    </div>

    <div className='buy-tickets-right'>
      <Link
        isExternal={true}
        href={BUY_TICKETS_URI}
        className='buy-tickets-btn .home-banner-cta-btn'
        text={'Buy Tickets'}
      />
      <span className='buy-tickets-btn-subtext'>
        ...before they're all gone!
      </span>
    </div>
   </section>
)

export default BuyTickets
