import React from 'react'
import './index.css'

const LineButton = ({ className, text, href = '#' }) => (
  <a href={href} className={`reactathon-line-btn ${className}`}>
    {text}
  </a>
)

export default LineButton
