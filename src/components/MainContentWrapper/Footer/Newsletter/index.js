import React from 'react'
import './index.css'

const Newsletter = () => (
  <div class="footer-newsletter">
    <div id="footer-newsletter-wrap">
      <em>Stay up-to-date with our (non-spammy) newsletter.</em>
      <form id="newsletter-form" name="Newsletter" method="POST">
          <input type="hidden" name="form-name" value="Newsletter" />
          <input class="hidden" name="bot-field" />
          <input type="text" name="email" placeholder="Your Email" class="email" />
          <button type="”submit”" class="subscribe">Subscribe</button>
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
