import React from 'react'
import BuyTickets from './BuyTickets'
import './index.css'

const MainContent = ({ children }) => (
  <section className='main-container'>
      {children}
  </section>
)

const MainFooter = () => (
  <section id='main-footer' className='main-footer'>

  </section>
)

const MainContentWrapper = ({ children }) => (
  <main id='content' className='main page-content' aria-label='Content'>
    <MainContent children={children} />
    <BuyTickets />
    <MainFooter />
  </main>
)

export default MainContentWrapper
