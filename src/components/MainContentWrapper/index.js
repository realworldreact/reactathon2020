import React from 'react'
import './index.css'

const MainContentWrapper = ({ children }) => (
  <main id='content' className='main page-content' aria-label='Content'>
    <section className="container">
      {children}
    </section>
  </main>
)

export default MainContentWrapper
