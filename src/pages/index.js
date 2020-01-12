import React from 'react'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'
import SidebarMenu from '../components/SidebarMenu'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import LeftNav from '../components/LeftNav'
import MainLayout from '../layouts/main'

const IndexPage2 = () => (
  <div style={{overflow: 'hidden'}}>
  {/* <SidebarMenu/> */}
  <LeftNav />
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

const IndexPage = () => (
  <MainLayout>
    {/* <div>Hello World!</div> */}
    <Hero />
    <Speakers />
    <hr/>
    <AdditionalEvents />
    <hr/>
    <Highlights />
    <hr/>
    <Sponsors />
    <Footer />
  </MainLayout>
)

export default IndexPage
