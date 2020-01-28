import React, { useState } from 'react'
import './index.css'

const NativeNavMenu = ({ items }) => {
  const [isMenuExpanded, toggleMenuState] = useState(false)
  return (
    <div className={`burger nav-trigger ${isMenuExpanded ? 'burger-expanded' : ''}`}>
      <div className={`burger-inner ${isMenuExpanded ? 'burger-inner-expanded' : ''}`}>
        <button className='burger-inner-btn' onClick={() => toggleMenuState(!isMenuExpanded)}>
          <span className='menu-item'></span>
          <span className='menu-item'></span>
          <span className='menu-item'></span>
        </button>
      </div>
    </div>
  )
}

export default NativeNavMenu
