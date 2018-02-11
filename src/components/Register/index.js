import React from 'react'
import buyTicketsPlaceholder from '../../assets/placeholder/tickets-fundamentals-placeholder.png'
import { BUY_TICKETS_ID } from '../../constants'

const Register = () => (
  <section id={BUY_TICKETS_ID}>
    <h1 style={{ marginBottom: 20 }}>Register</h1>
    <p style={{ fontSize: 14, marginBottom: 50 }}>
      A nominal fee is required to reduce no-shows
    </p>
    <img src={buyTicketsPlaceholder} />
  </section>
)

export default Register
