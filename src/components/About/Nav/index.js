import React from 'react'
import { getLocationHash } from '../../../utils/window'
import './index.css'

const AboutNavItem = ({ text, href = '#', id }) => {
  const isActive = getLocationHash() === href
  return (
    <div 
      key={id}
      className={`about-nav-tab-item ${isActive ? 'about-nav-tab-item-is-active' : ''}`}
    >
      <a href={href}>
        {text}
      </a>
    </div>
  )
}

const AboutNav = ({ items }) => (
    <div className='section-content-only about-nav-wrap'>
      <div className='about-nav-tabs'>
        {items.map((item, idx) => (
          <AboutNavItem
            key={idx}
            id={idx}
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
    href: '#topic-tables',
  }, {
    text: 'Ask React Team',
    href: '#ask-react-team'
  }, {
    text: 'Unconference',
    href: '#unconference'
  }, {
    text: 'Venue and Hotel',
    href: '#venue-and-hotel'
  }, {
    text: 'Jobs',
    href: '#jobs'
  }, {
    text: 'City Guide',
    href: '#city-guide'
  }, {
    text: 'Diversity & Safety',
    href: '#diversity-and-safety'
  }, {
    text: 'FAQ',
    href: '#faq'
  }]
}

export default AboutNav
