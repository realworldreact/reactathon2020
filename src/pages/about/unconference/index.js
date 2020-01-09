import React from 'react'
import AboutMenu from '../../../components/about/AboutMenu'
import SidebarMenu from '../../../components/SidebarMenu'
import Footer from '../../../components/Footer'

const UnconferencePage = () => (
  <div style={{overflow: 'hidden'}}>
  <SidebarMenu/>
  <main style={{ textAlign: 'center', marginLeft: 300 }}>
    <AboutMenu page="unconference" />
    <Footer />
  </main>
  </div>
)

export default UnconferencePage
