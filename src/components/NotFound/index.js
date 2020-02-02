import React from 'react'
import Divider from '../Divider'
import './index.css'

const NotFound = () => (
  <div>
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
    </section>
    <div className='section-404-bottom'>
      <Divider />
    </div>
  </div>
)

export default NotFound
