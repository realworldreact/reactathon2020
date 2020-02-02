import React, { useState } from 'react'
import './index.css'

const NativeNavMenuBurger = ({ isMenuExpanded, toggleMenuState }) => (
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

const NativeNavMenuWrap = ({ isMenuExpanded, toggleMenuState }) => (
  <div>
    <NativeNavMenuBurger
      isMenuExpanded={isMenuExpanded}
      toggleMenuState={toggleMenuState}
    />
  </div>
)

export default NativeNavMenuWrap
