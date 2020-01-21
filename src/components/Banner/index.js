import React from 'react'
import './index.css'

const Banner = ({ className = '', content }) => (
  <div className={`banner ${className}`}>
    {content}
  </div>
)

export default Banner
