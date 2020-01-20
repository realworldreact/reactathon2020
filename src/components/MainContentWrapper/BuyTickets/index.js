import React from 'react'
import './index.css'

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
      <a 
        href='https://ti.to/real-world-react/reactathon-2020' 
        className='buy-tickets-btn .home-banner-cta-btn'>
          Buy Tickets
      </a>
      <span className='buy-tickets-btn-subtext'>
        ...before they're all gone!
      </span>
    </div>
   </section>
)

export default BuyTickets
