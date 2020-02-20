import React from 'react'
import Divider from '../Divider'
import './index.css'

const Newsletter = () => (
  <div>
    <section className='section-content section-newsletter'>
      <h2 className='section-newsletter-header'>
        Thank you!
      </h2>
      <p className='section-newsletter-subtext'>
        We'll keep you up-to-date with the latest info.
      </p>
      <p className='section-newsletter-subtext'>
        Need anything else? Perhaps we can help you out. &nbsp;
        <a href="mailto:ben@realworldreact.com">
          Drop us a line
        </a>.
      </p>
    </section>
    <div className='section-newsletter-bottom'>
      <Divider />
    </div>
  </div>
)

export default Newsletter
