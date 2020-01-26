import React from 'react'
import ContentNavMenu from '../../ContentNavMenu'
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

const AboutNav2 = ({ items }) => (
    <div className='section-content-only about-nav-wrap'>
      <div className='about-nav-tabs'>
        <div className='about-nav-tabs-inner'>
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
    </div>
)

const AboutNav = ({ items }) => (
  <div className='section-content-only'>
    <ContentNavMenu
      items={items.map(item => ({
        ...item,
        className: 'about-content-nav-item'
      }))}
    />
  </div>
)

AboutNav.defaultProps = {
  items: [{
    text: 'Topic Tables',
    href: '/about#topic-tables',
  }, {
    text: 'Ask React Team',
    href: '/about#ask-react-team'
  }, {
    text: 'Unconference',
    href: '/about#unconference'
  }, {
    text: 'Venue and Hotel',
    href: '/about#venue-and-hotel'
  }, {
    text: 'Jobs',
    href: '/about#jobs'
  }, {
    text: 'City Guide',
    href: '/about#city-guide'
  }, {
    text: 'Diversity & Safety',
    href: '/about#diversity-and-safety'
  }, {
    text: 'FAQ',
    href: '/about#faq'
  }]
}

export default AboutNav
