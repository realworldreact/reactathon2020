import React from 'react'
import { BUY_TICKETS_ID } from '../../constants'

const Register = ({ ticketWidget }) => (
  <section id={BUY_TICKETS_ID}>
    <h1 style={{ marginBottom: 20 }}>Register</h1>
    {ticketWidget}
  </section>
)

export default Register
