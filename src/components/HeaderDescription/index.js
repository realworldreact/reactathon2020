import React from 'react'
import './index.css'

const HeaderDescription = ({ text, className = '' }) => (
  <div className='header-description-wrap'>
    <div className={`header-description ${className}`}>
      {text}
    </div>
  </div>
)

export default HeaderDescription
