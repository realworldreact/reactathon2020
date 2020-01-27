import React from 'react'
import ContentNavMenu from '../../ContentNavMenu'
import { getLocationHash, getLocationPathname } from '../../../utils/window'
import './index.css'

const ScheduleNav = ({ items }) => (
  <div className='section-content-only'>
    <ContentNavMenu
      items={items.map(item => ({
        ...item,
        className: 'schedule-content-nav-item',
        activeLinkClassName: 'schedule-content-nav-item-is-active',
        isActiveHandler: () =>  {
          console.log(item.href, `${getLocationPathname()}${getLocationHash()}`, item.href === `${getLocationPathname()}${getLocationHash()}`)
          return item.href === `${getLocationPathname()}${getLocationHash()}`
        }
      }))}
      showDivider={false}
      dividerClassName='schedule-content-nav-divider'
    />
  </div>
)

ScheduleNav.defaultProps = {
  items: [{
    text: 'March 30',
    href: '/schedule#day1',
  }, {
    text: 'March 31',
    href: '/schedule#day2'
  }]
}

export default ScheduleNav
