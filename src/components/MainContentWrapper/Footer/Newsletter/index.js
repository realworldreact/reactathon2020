import React from 'react'
import './index.css'

const Newsletter = () => {
  return (
    <div className='footer-newsletter'>
      <div className='footer-newsletter-wrap'>
        <em>Stay up-to-date with our (non-spammy) newsletter.</em>
        <form id='newsletter-form' name='Newsletter' method='POST' data-netlify='true' netlify-honeypot='bot-field' action='/newsletter'>
            <input type='hidden' name='form-name' value='Newsletter' />
            <input type='hidden' className='hidden' name='bot-field' />
            <input type='text' name='email' placeholder='Your Email' className='email' />
            <button type='submit' className='subscribe'>
              Subscribe
            </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
