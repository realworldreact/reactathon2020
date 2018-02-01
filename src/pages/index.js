import React from 'react'
import blackLogo from '../assets/reactathon-logo-black.svg'
import Conference from '../components/Conference'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'
import BuyTickets from '../components/BuyTickets'

const IndexPage = () => (
  <main style={{ textAlign: 'center' }}>
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
  </main>
)

export default IndexPage
