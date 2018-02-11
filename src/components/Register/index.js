import React from 'react'
import UniverseTicketWidget from '../UniversieTicketWidget'
import { BUY_TICKETS_ID, FUNDAMENTALS_TICKET_WIDGET_ID } from '../../constants'

const Register = () => (
  <section id={BUY_TICKETS_ID}>
    <h1 style={{ marginBottom: 20 }}>Register</h1>
    <p style={{ fontSize: 14, marginBottom: 50 }}>
      A nominal fee is required to reduce no-shows
    </p>
    <UniverseTicketWidget id={FUNDAMENTALS_TICKET_WIDGET_ID} />
  </section>
)

export default Register
