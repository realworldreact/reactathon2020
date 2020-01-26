import React from 'react'
import ContentNavMenu from '../../ContentNavMenu'
import { getLocationHash, getLocationPathname } from '../../../utils/window'
import './index.css'

const AboutNav = ({ items }) => (
  <div className='section-content-only'>
    <ContentNavMenu
      items={items.map(item => ({
        ...item,
        className: 'about-content-nav-item',
        activeLinkClassName: 'about-content-nav-item-is-active',
        isActiveHandler: () =>  {
          console.log(item.href, `${getLocationPathname()}${getLocationHash()}`, item.href === `${getLocationPathname()}${getLocationHash()}`)
          return item.href === `${getLocationPathname()}${getLocationHash()}`
        }
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
