import React from 'react'
import './index.css'

const Banner = ({ className = '', content }) => (
  <div className={`banner banner-content ${className}`}>
    {content}
  </div>
)

export default Banner
