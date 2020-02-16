import React from 'react'
import Divider from '../Divider'
import './index.css'

const Newsletter = () => (
  <div>
    <section className='section-content section-404'>
      <h2 className='section-404-header'>
        Thank you!
      </h2>
      <p className='section-404-subtext'>
        We'll keep you up-to-date with the latest info.
      </p>
      <p className='section-404-subtext'>
        Need anything else? Perhaps we can help you out. &nbsp;
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

export default Newsletter
