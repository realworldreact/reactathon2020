import React from 'react'
import location from './location-sf@2x.png'
import venueImage from './venue-image.png'
import venueMap from './venue-map.png'

const Location = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 50 }}>Location</h1>
    <img src={location} alt="San Francisco" style={{ width: '100%' }} />
    <h1 style={{ marginTop: 50, marginBottom: 50 }}>Venue</h1>
    <h1 style={{ marginTop: 50, marginBottom: 50, fontFamily: 'times, serif', fontSize: 42 }}>
      JW Marriott Union Square
    </h1>
    <img src={venueImage} alt="JW Marriott Union Square Hotel" style={{ width: '50%' }} />
    <p style={{ fontSize: 22, color: '#363636', marginTop: 40 }}>
      515 Mason Street<br />San Francisco, California 94102
    </p>
    <img src={venueMap} alt="Map of the location of the JW Marriott Union Square Hotel" style={{ width: '50%', marginTop: 50 }} />
  </section>
)

export default Location
