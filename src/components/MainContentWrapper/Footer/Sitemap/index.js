import React from 'react'
import './index.css'

const SitemapLinkItem = ({ href = '#', className = '', text, id }) => (
  <a key={id} href={href} className={`footer-sitemap-link-item ${className}`}>
    {text || <span>&nbsp;</span> }
  </a>
)

const Sitemap = ({ items }) => (
  <div className='footer-sitemap'>
    {items.map((item, idx) => (
      <SitemapLinkItem 
        key={idx}
        id={idx}
        href={item.href}
        text={item.text}
        className={item.className}
      />
    ))}
  </div>
)

Sitemap.defaultProps = {
  items: [{
    text: 'Schedule',
    href: '#'
  }, {
    text: 'Code of Conduct',
    href: '#'
  }, {
    text: 'Speakers',
    href: '#'
  }, {
    text: 'Diversity / Scholarship',
    href: '#'
  }, {
    text: 'Workshops',
    href: '#'
  }, {
    text: 'Volunteers',
    href: '#'
  }, {
    text: 'Topic Tables',
    href: '#'
  }, {
    text: 'Become a sponsor',
    href: '#'
  }, {
    text: 'Jobs',
    href: '#'
  }, {
    text: 'Convince Your Boss',
    href: '#'
  }, {
    text: 'About',
    href: '#'
  }, {
    text: '',
    href: ''
  }, {
    text: 'Podcast',
    href: '#'
  }]
}

export default Sitemap
