import React from 'react'
import './index.css'

const MainContentWrapper = ({ children }) => (
  <main id='content' className='main page-content' aria-label='Content'>
    <section class="container pt-7 pb-3 intro">
      {children}
    </section>
  </main>
)

export default MainContentWrapper
