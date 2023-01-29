import React from 'react'
// import BuyTickets from './BuyTickets'
import Pricing from './Pricing'
import FooterTopBackground from './Footer/FooterTopBackground'
import Footer from './Footer'
import './index.css'

const MainContent = ({ children }) => (
  <div>
    <section className="main-container">{children}</section>
  </div>
)

const MainContentWrapper = ({ children }) => (
  <main id="content" className="main page-content" aria-label="Content">
    <MainContent children={children} />
    {/* <BuyTickets /> */}
    <Pricing />
    <FooterTopBackground />
    <Footer />
  </main>
)

export default MainContentWrapper
