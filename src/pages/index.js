import React from 'react'
import MediaQuery from 'react-responsive'
import Conference from '../components/Conference'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'
import ConvinceYourBoss from '../components/ConvinceYourBoss'
import SidebarMenu from '../components/SidebarMenu'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import BuyTickets from '../components/BuyTickets'

const IndexPage = () => (
  <div style={{overflow: 'hidden'}}>
  <SidebarMenu/>
  <main style={{ textAlign: 'center', marginBottom: 100, marginLeft: 300 }}>
    <Hero />
    <AdditionalEvents />
    <hr/>
    <Speakers />
    <hr/>
    <MediaQuery minDeviceWidth={1224}>
      <div>
        <Highlights />
        <hr />
      </div>
    </MediaQuery>
    <Sponsors />
    <Footer />
  </main>
  </div>
)

export default IndexPage
