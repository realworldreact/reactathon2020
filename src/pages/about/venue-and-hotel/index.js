import React from 'react'
import MediaQuery from 'react-responsive'
import AboutMenu from '../../../components/about/AboutMenu'
import SidebarMenu from '../../../components/SidebarMenu'
import Footer from '../../../components/Footer'

const VenueAndHotelPage = () => (
  <div style={{overflow: 'hidden'}}>
  <SidebarMenu/>
  <main style={{ textAlign: 'center', marginLeft: 300 }}>
    <AboutMenu page="venue-and-hotel" />
    <Footer />
  </main>
  </div>
)

export default VenueAndHotelPage
