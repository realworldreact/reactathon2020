import React, { useState } from 'react'
import Link from '../Link'
import NavMenu from './NavMenu'
import NativeNavMenu from './Native'
import MENU_ITEMS from './menu-items'
import ReactathonLogo from '../../assets/images/left-nav/reactathon-nav-logo.svg'
import { BUY_TICKETS_URI, ROUTES } from '../../constants'
import './index.css'

const Logo = ({ isMenuExpanded }) => (
  <div
    className={`site-branding ${
      isMenuExpanded ? 'site-branding-expanded' : ''
    }`}
    itemScope=""
    itemType="http://schema.org/Organization"
  >
    <Link
      text={<img src={ReactathonLogo} alt="Reactathon Logo" />}
      isExternal={false}
      href="/"
    />
  </div>
)

const LeftNav = ({ navMenu }) => {
  const [isNativeMenuExpanded, toggleNativeMenuState] = useState(false)
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo isMenuExpanded={isNativeMenuExpanded} />
        <NavMenu isMenuExpanded={isNativeMenuExpanded} {...navMenu} />
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
      href: BUY_TICKETS_URI,
    },
    navFooter: {
      header: 'Convince your boss:',
      items: [
        {
          text: 'Email Template',
          href: ROUTES.emailTemplate,
          target: '_blank',
          isExternal: true,
        },
        {
          text: 'Download PDF',
          href: ROUTES.downloadPdf,
          target: '_blank',
          isExternal: true,
        },
      ],
      itemsAdditional: [
        {
          text: 'Get a free remote ticket',
          href: 'https://ti.to/real-world-react/reactathon-2022/',
          target: '_blank',
          isExternal: true,
        },
      ],
    },
  },
}

export default LeftNav
