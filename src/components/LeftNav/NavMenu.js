import React from 'react'
import Link from '../Link'
import NavMenuItem from './NavMenuItem'
import { getLocationPathname } from '../../utils/window'

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

const NavMenu = ({ className = '', isMenuExpanded = false, menuItems, ctaNav, navFooter }) => (
  <nav id='navigation-drawer' className={`navigation-drawer ${className} ${isMenuExpanded ? 'navigation-drawer-native' : ''}`}>
			<div className='navigation-drawer__inner'>
				<ul className='main-nav'>
          {menuItems.map((item, idx) => (
            <NavMenuItem
              key={idx}
              idx={idx}
              item={item}
              isActive={
                getLocationPathname() === item.page || (
                  getLocationPathname() !== '/' &&
                  item.page.startsWith(getLocationPathname())
                )}
            />
          ))}
        </ul>
        <CTANav text={ctaNav.text} href={ctaNav.href} />
        <NavFooter {...navFooter} />
      </div>
  </nav>
)

export default NavMenu
