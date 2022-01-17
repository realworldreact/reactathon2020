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
    id: 'day1',
    text: 'May 3',
    href: '/schedule/day-1',
  }, {
    id: 'day2',
    text: 'May 4',
    href: '/schedule/day-2',
  }, {
    id: 'day3',
    text: 'May 5',
    href: '/schedule/day-3'
  }]
}

export default ScheduleNav
