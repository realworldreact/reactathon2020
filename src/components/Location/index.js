import React from 'react'
import location from './location-sf@2x.png'

const Location = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 50 }}>Location</h1>
    <img src={location} alt="San Francisco" style={{ width: '100%' }}/>
    <p style={{ fontSize: 16, color: '#363636', marginTop: 40  }}>Venue selected, contract in progress. Announcement coming soon :)</p>
  </section>
)

export default Location