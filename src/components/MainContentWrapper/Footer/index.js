import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'
import Newsletter from './Newsletter'
import Sitemap from './Sitemap'
import './index.css'
import LineHeader from '../../LineHeader'
// import footerLogo from '../../../assets/images/footer/reactathon-in-the-park-logo.svg'
import footerLogo from '../../../assets/images/footer/reactathon-footer-logo.svg'

const MainFooter = () => (
  <section id="main-footer" className="main-footer">
    <div className="main-footer-content footer-row">
      <div className="footer-logo">
        <img src={footerLogo} alt="footer-logo" width={105} />
      </div>
      <div className="main-footer-left footer-column">
        <LineHeader
          text="Get in touch"
          className="main-footer-section-header"
        />
        <br />
        <SocialMediaLinks />
        <Newsletter />
      </div>
      <div className="main-footer-right footer-column">
        <LineHeader text="Sitemap" className="main-footer-section-header" />
        <Sitemap />
      </div>
    </div>
  </section>
)

export default MainFooter
