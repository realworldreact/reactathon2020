import React from 'react'
import Divider from '../Divider'
import './index.css'

const LiveStreamAccessInput = () => {
  return (
    <div className="livestream-access">
      <div className="">
        <em>Stay up to date on this and upcoming events</em>
        <form
          name="LiveStreamAccessForm"
          method="POST"
          action="https://formspree.io/f/xknpvgrd"
        >
          <input type="hidden" name="form-name" value="LiveStreamAccess" />
          <input type="hidden" className="hidden" name="bot-field" />
          <input
            type="text"
            name="_replyto"
            placeholder="Enter your email to stay up to date"
            className="email"
          />
          <button type="submit" className="subscribe">
            Get Access
          </button>
        </form>
      </div>
    </div>
  )
}

export default LiveStreamAccessInput
