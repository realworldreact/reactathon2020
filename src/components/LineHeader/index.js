import React from 'react'
import './index.css'

const LineHeader = ({ text, className = '' }) => (
  <h2 className={`line-header ${className}`}>
    {text}
  </h2>
)

export default LineHeader
