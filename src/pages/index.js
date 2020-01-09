import React from 'react'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'
import SidebarMenu from '../components/SidebarMenu'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div style={{overflow: 'hidden'}}>
  <SidebarMenu/>
  <main style={{ textAlign: 'center', marginLeft: 300 }}>
    <Hero />
    <Speakers />
    <hr/>
    <AdditionalEvents />
    <hr/>
    <Highlights />
    <hr/>
    <Sponsors />
    <Footer />
  </main>
  </div>
)

export default IndexPage
