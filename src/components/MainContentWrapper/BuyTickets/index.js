import React from 'react'
import Link from '../../Link'
import './index.css'
import { BUY_TICKETS_URI } from '../../../constants'
import SectionTitle from '../../Home/SectionTitle'

const BuyTickets = () => (
  <>
    <div className="c-buy-tickets-title">
      <SectionTitle text="Tickets" className="title-buy-tickets" />
      <p>Special launch price: use code FEBRUARY for 40% off!</p>
      <p>Recently laid off? Email info@reactathon.com for steeper discounts!</p>
    </div>
    <section id="buy-tickets-section" className="buy-tickets-section">
      <div className="buy-tickets-left">
        <h1 className="buy-tickets-header">
          <span className="buy-tickets-header-text">Don't wait</span>
          <br />
          <span className="buy-tickets-header-subtext">
            Get yours before they're gone.
          </span>
        </h1>
      </div>

      <div className="buy-tickets-right">
        <Link
          isExternal={true}
          href={BUY_TICKETS_URI}
          className="buy-tickets-btn"
          text={'Buy Tickets'}
        />
        <span className="buy-tickets-btn-subtext">
          ...before they're all gone!
        </span>
      </div>
    </section>
  </>
)

export default BuyTickets
