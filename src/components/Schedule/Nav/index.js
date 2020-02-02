import React from 'react'
import ContentNavMenu from '../../ContentNavMenu'
import { getLocationHash, getLocationPathname } from '../../../utils/window'
import './index.css'

const ScheduleNav = ({ items }) => (
  <div className='schedule-nav'>
    <ContentNavMenu
      items={items.map(item => ({
        ...item,
        className: 'schedule-content-nav-item',
        activeLinkClassName: 'schedule-content-nav-item-is-active',
        isActiveHandler: () =>  {
          return item.href === `${getLocationPathname()}${getLocationHash()}`
        }
      }))}
      showDivider={true}
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
