import React from 'react'
import Link from '../Link'
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

const NavMenuItem = ({ idx, item, isActive }) => {
  return (
    <li key={idx} className={isActive ? 'is-active' : ''}>
      <Link
        href={item.page}
        isExternal={false}
        text={(<span>{item.name}</span>)}
      />
    </li>
  )
}

const CTANav = ({ text, href }) => (
  <ul className='utility-nav'>
    <li>
      <Link
        isExternal={true}
        href={href}
        text={(<span>{text}</span>)}
      />
    </li>
  </ul>
)

const NavFooter = ({ header, items }) => (
  <div className='nav-footer'>
    <div className='nav-footer-header'>
      {header}
    </div>
    <ul className='nav-footer-list'>
      {items.map((item, idx) => (
        <li key={idx}>
          <Link
            isExternal={false}
            href={item.href}
            text={item.text}
          />
        </li>
      ))}
    </ul>
  </div>
)

const NavMenu = ({ menuItems, ctaNav, navFooter }) => (
  <nav id='navigation-drawer' className='navigation-drawer'>
			<div className='navigation-drawer__inner'>
				<ul className='main-nav'>
          {menuItems.map((item, idx) => (
            <NavMenuItem
              key={idx}
              idx={idx}
              item={item}
              isActive={getLocationPathname() === item.page}
            />
          ))}
        </ul>
        <CTANav text={ctaNav.text} href={ctaNav.href} />
        <NavFooter {...navFooter} />
      </div>
  </nav>
)

NavMenu.defaultProps = {
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

const LeftNav = () => (
  <header className='site-header'>
    <div className='site-header__inner'>
      <Logo />
      <NavMenu />
      <NativeNavMenu />
    </div>
  </header>
)

export default LeftNav
