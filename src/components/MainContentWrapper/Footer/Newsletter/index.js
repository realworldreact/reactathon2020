import React from 'react'
import './index.css'

const Newsletter = () => {
  return (
    <div className="footer-newsletter">
      <div className="footer-newsletter-wrap">
        <em>Stay up-to-date with our (non-spammy) newsletter.</em>
        <form
          action="https://reactathon.us12.list-manage.com/subscribe/post?u=61b17cbde66a062a953c16339&amp;id=c14aaf8666&amp;f_id=0001b8e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <input type="hidden" name="form-name" value="Newsletter" />
          <input type="hidden" className="hidden" name="bot-field" />
          <input
            type="text"
            name="EMAIL"
            placeholder="Your Email"
            className="email"
            required
          />
          <button type="submit" className="subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
