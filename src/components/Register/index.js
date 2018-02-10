import React from 'react'
import buyTicketsPlaceholder from '../../assets/placeholder/tickets-fundamentals-placeholder.png'

const Register = () => (
  <section id="buy-tickets">
    <h1 style={{ marginBottom: 20 }}>Register</h1>
    <p style={{ fontSize: 14, marginBottom: 50 }}>
      A nominal fee is required to reduce no-shows
    </p>
    <img src={buyTicketsPlaceholder} />
  </section>
)

export default Register
