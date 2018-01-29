import React from 'react'
import blackLogo from '../assets/reactathon-logo-black.svg'
import Conference from '../components/Conference'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'

const IndexPage = () => (
  <main style={{ textAlign: 'center', marginTop: 100 }}>
    <img src={blackLogo} alt="Reactathon logo" />
    <h1 style={{ marginTop: 30 }}>March 20-22, 2018</h1>
    <h2>San Francisco</h2>
    <Conference />
    <hr />
    <Speakers />
    <hr />
    <AdditionalEvents />
    <hr />
    <Highlights />
    <hr />
    <Sponsors />
  </main>
)

export default IndexPage
