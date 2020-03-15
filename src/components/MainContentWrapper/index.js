import React from 'react'
import BuyTickets from './BuyTickets'
import Footer from './Footer'
import StickySiteHeader from '../StickySiteHeader'
import './index.css'

const MainContent = ({ children }) => (
  <div>
    <StickySiteHeader />
    <section className='main-container'>
      {children}
    </section>
  </div>
)

const MainContentWrapper = ({ children }) => (
  <main id='content' className='main page-content' aria-label='Content'>
    <MainContent children={children} />
    <BuyTickets />
    <Footer />
  </main>
)

export default MainContentWrapper
