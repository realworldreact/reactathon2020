import React from 'react'
import RegisterNowCallToAction from '../components/RegisterNowCallToAction'
import Register from '../components/Register'
import createUniverseTicketWidget from '../components/UniverseTicketWidget/createUniverseTicketWidget'
import { HIRING_MIXER_TICKET_WIDGET_ID } from '../constants'

const HiringMixerTicketWidget = createUniverseTicketWidget(
  HIRING_MIXER_TICKET_WIDGET_ID
)

const HiringMixer = () => (
  <div style={{ marginTop: 60, marginBottom: 100, textAlign: 'center' }}>
    <h1>Hiring Mixer</h1>
    <h3 style={{ color: '#535353', marginTop: 20, marginBottom: 50 }}>
      Friday, March 23
    </h3>
    <div style={{ marginBottom: 50 }}>
      <RegisterNowCallToAction
        title="SAN FRANCISCO’S TOP COMPANIES + YOU"
        descriptionParagraphs={[
          'Come and mingle with some of the SF Bay’s hottest companies and startups including Eventbrite, Sony Interactive Entertainment, and many more.',
          'Can’t make the in-person hiring mixer? Don’t want to reveal at you’re looking around? Sign up for the Remote Hiring Mixer below, and choose which companies can see your profile before we send it to them.',
        ]}
        callToAction="Free to attend for hireable developers"
      />
      <p style={{ marginTop: 50 }}>Sign up for the <b>Remote Hiring Mixer</b> <a href="https://goo.gl/forms/YYbTm7mbUrByFiZt1" target="_blank">here</a></p>
    </div>
    <hr />
    <div style={{ marginTop: 50 }}>
      <Register ticketWidget={<HiringMixerTicketWidget />} />
    </div>
  </div>
)

export default HiringMixer
