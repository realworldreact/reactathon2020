import React from 'react'
import './index.css'

const AboutNavItem = ({ text, href = '#', isActive = false }) => (
  <div className={`about-nav-tab-item ${isActive ? 'about-nav-tab-item-is-active' : ''}`}>
    <a href={href}>
      {text}
    </a>
  </div>
)

const AboutNav = ({ items }) => (
    <div className='section-content-only about-nav-wrap'>
      <div className='about-nav-tabs'>
        {items.map(item => (
          <AboutNavItem 
            text={item.text}
            href={item.href}
            isActive={item.isActive}
          />
          ))}
      </div>
    </div>
)

AboutNav.defaultProps = {
  items: [{
    text: 'Topic Tables',
    href: '#',
    isActive: true
  }, {
    text: 'Ask React Team',
    href: '#'
  }]
}

export default AboutNav
