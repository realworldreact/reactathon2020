import React from 'react'
import menuItems from './menu-items'
import ReactathonLogo from '../../assets/reactathon-nav-logo.svg'
import ReactMenuIcon from '../../assets/icons/menu/react-menu-icon.svg'
import './index.css'

const Logo = () => (
  <div className='site-branding' itemScope='' itemType='http://schema.org/Organization'>
    <a href='/'>
      <img src={ReactathonLogo} alt='Reactathon Logo' />
    </a>
  </div>
)

const NavMenuItem = ({ idx, item, isActive }) => {
  return (
    <li key={idx} className={isActive ? 'is-active' : ''}>
      <a href={item.page}>
        {isActive && (
          <span>
            <img src={ReactMenuIcon} alt='react-menu' className='nav-menu-icon' />
            &nbsp;
          </span>
        )} 
        <span>{item.name}</span>
      </a>
    </li>
  )
}

const CTANav = () => (
  <ul className='utility-nav'>
    <li>
      <a href='/#'>
        Buy Tickets
      </a>
    </li>
  </ul>
)

const NavMenu = () => (
  <nav id='navigation-drawer' className='navigation-drawer'>
			<div className='navigation-drawer__inner'>
				<ul className='main-nav'>
          {menuItems.map((item, idx) => (
            <NavMenuItem 
              key={idx}
              idx={idx}
              item={item}
              isActive={window.location.pathname === item.page}
            />
          ))}
        </ul>
        <CTANav />
      </div>
  </nav>
)

const LeftNav = () => (
  <header className='site-header'>
    <div className='site-header__inner'>
      <Logo />
      <NavMenu />
      {/* <NavFooter /> */}
    </div>
  </header>
)

export default LeftNav
