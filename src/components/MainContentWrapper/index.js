import React from 'react'
import BuyTickets from './BuyTickets'
import Footer from './Footer'
import './index.css'

const MainContent = ({ children }) => (
  <section className='main-container'>
      {children}
  </section>
)

const MainContentWrapper = ({ children }) => (
  <main id='content' className='main page-content' aria-label='Content'>
    <MainContent children={children} />
    <BuyTickets />
    <Footer />
  </main>
)

export default MainContentWrapper
