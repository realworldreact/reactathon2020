import React from 'react'
import './index.css'

const MainContent = ({ children }) => (
  <section className='main-container'>
      {children}
  </section>
)

const BuyTicketsSection = () => (
  <section id='buy-tickets-section' className='buy-tickets-section'>
    <h1 className='buy-tickets-left'>Don't wait</h1>
    <div className='buy-tickets-right'>
      <a 
        href='https://ti.to/real-world-react/reactathon-2020' 
        className='buy-tickets-btn .home-banner-cta-btn'>
          Buy Tickets
      </a>
      <span className='buy-tickets-btn-subtext'>
        ...before they're all gone!
      </span>
    </div>
  </section>
)

const MainFooter = () => (
  <section id='main-footer' className='main-footer'>

  </section>
)

const MainContentWrapper = ({ children }) => (
  <main id='content' className='main page-content' aria-label='Content'>
    <MainContent children={children} />
    <BuyTicketsSection />
    <MainFooter />
  </main>
)

export default MainContentWrapper
