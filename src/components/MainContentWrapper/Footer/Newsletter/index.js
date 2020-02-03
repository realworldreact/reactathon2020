import React from 'react'
import './index.css'

const Newsletter = () => (
  <div className='footer-newsletter'>
    <div className="footer-newsletter-wrap">
      <em>Stay up-to-date with our (non-spammy) newsletter.</em>
      <form id="newsletter-form" name="Newsletter" method="POST">
          <input type='hidden' name='form-name' value='Newsletter' />
          <input type='hidden' className='hidden' name='bot-field' />
          <input type='text' name='email' placeholder='Fixing this brb...' className='email' />
          <button type='submit' className='subscribe'>
            Subscribe
          </button>
      </form>
    </div>
    {/* <div class="thank-you message">
      <em>Thank you! We'll keep you up-to-date with the latest info.</em>
    </div>
    <div class="failed message">
      <em>Uh oh! There was an error. Please try again.</em>
    </div> */}
  </div>
)

export default Newsletter
