import React, { useState } from 'react'
import Link from '../Link'
import NavMenu from './NavMenu'
import NavMenuItem from './NavMenuItem'
import NativeNavMenu from './Native'
import MENU_ITEMS from './menu-items'
import ReactathonLogo from '../../assets/images/left-nav/reactathon-nav-logo.svg'
import { getLocationPathname } from '../../utils/window'
import { BUY_TICKETS_URI } from '../../constants'
import './index.css'


const Logo = () => (
  <div className='site-branding' itemScope='' itemType='http://schema.org/Organization'>
    {<Link
      text={(<img src={ReactathonLogo} alt='Reactathon Logo' />)}
      isExternal={false}
      href='/'
    />}
  </div>
)


const LeftNav = ({ navMenu }) => {
  const [isNativeMenuExpanded, toggleNativeMenuState] = useState(false)
  return (
    <header className='site-header'>
      <div className='site-header__inner'>
        <Logo />
        <NavMenu
          isMenuExpanded={isNativeMenuExpanded}
          {...navMenu}
        />
        <NativeNavMenu
          isMenuExpanded={isNativeMenuExpanded}
          toggleMenuState={toggleNativeMenuState}
        />
      </div>
    </header>
  )
}

LeftNav.defaultProps = {
  navMenu: {
    menuItems: MENU_ITEMS,
    ctaNav: {
      text: 'Buy Tickets',
      href: BUY_TICKETS_URI
    },
    navFooter: {
      header: 'Convince your boss',
      items: [{
        text: 'Email Template',
        href: '/#'
      }, {
        text: 'Download PDF',
        href: '/#'
      }]
    }
  }
}

export default LeftNav
