import React from 'react'
import menuItems from './menu-items'
import ReactathonLogo from '../../assets/reactathon-nav-logo.svg'
import './index.css'

const Logo = () => (
  <div className='site-branding' itemScope='' itemType='http://schema.org/Organization'>
    <a href='/'>
      <img src={ReactathonLogo} alt='Reactathon Logo' />
    </a>
  </div>
)

const NavMenuItem = ({ idx, item }) => {
  const isActive = idx === 0
  console.log('item', item, idx, isActive) 
  return (
    <li key={idx} className={isActive ? 'is-active' : ''}>
      <a href={item.page}>
        <span>{item.name}</span>
      </a>
    </li>
  )
}

const CTANav = () => (
  <ul className='utility-nav'>
    <li>
      <a href='#'>
        <span>Buy Tickets</span>
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
