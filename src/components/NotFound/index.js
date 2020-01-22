import React from 'react'
import './index.css'

const NotFound = () => (
  <section className='section-content section-404'>
    <h2 className='section-404-header'>
      404: This page cannot be found.
    </h2>
    <p className='section-404-subtext'>
      Perhaps we can help you out. &nbsp; 
      <a href="mailto:ben@realworldreact.com">
        Drop us a line
      </a>.
    </p>
    <hr className='section-divider' />
  </section>
)

export default NotFound
