import React from 'react'
import './index.css'

const TestimonialsItem = ({ text, imgSrc, name, role }) => {
  return (
    <div className="testimonial-item">
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          <img src={imgSrc} alt={name} />
        </div>
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-role">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsItem
