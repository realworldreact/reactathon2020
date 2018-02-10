import React from 'react'
import Conference from '../components/Conference'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'
import ConvinceYourBoss from '../components/ConvinceYourBoss'

import BuyTickets from '../components/BuyTickets'

const IndexPage = () => (
  <main style={{ textAlign: 'center', marginBottom: 100 }}>
    <Conference />
    <hr />
    <Speakers />
    <hr />
    <AdditionalEvents />
    <hr />
    <Highlights />
    <hr />
    <Sponsors />
    <hr />
    <BuyTickets />
    <ConvinceYourBoss />
  </main>
)

export default IndexPage
