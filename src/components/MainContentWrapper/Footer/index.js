import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'
import Newsletter from './Newsletter'
import Sitemap from './Sitemap'
import './index.css'

const MainFooter = () => (
  <section id='main-footer' className='main-footer'>
    <div className='main-footer-content footer-row'>
      <div className='main-footer-left footer-column'>
        <h2 className='main-footer-section-header'>
          Get in touch<br />
        </h2>
          <SocialMediaLinks />
          <Newsletter />
      </div>
      <div className='main-footer-right footer-column'>
        <h2 className='main-footer-section-header'>
          Sitemap
        </h2>
        <Sitemap />
      </div>
    </div>
  </section>
)

export default MainFooter
