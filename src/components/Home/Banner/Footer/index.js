import React from 'react'
import ClerkLogo from '../../../../assets/images/home/header/clerk-logo-dark-mode.svg'
import RWRLogo from '../../../../assets/images/home/header/header-rwr-logo.svg'
import './index.css'

const HomeBannerFooterSponsorImg = ({ src, className, alt }) => (
  <img className={className} src={src} alt={alt} />
)

const HomeBannerFooter = () => (
  <div className="home-banner-footer">
    <div>Presented by</div>
    <div className="c-banner-footer-logos">
      <HomeBannerFooterSponsorImg
        className="home-banner-footer-sponsor-img home-banner-footer-sponsor-img-rwr"
        src={RWRLogo}
        alt="Real World React logo"
      />
      <span>&</span>
      <a href="https://clerk.dev" target="_blank" rel="noreferrer">
        <HomeBannerFooterSponsorImg
          className="home-banner-footer-sponsor-img home-banner-footer-sponsor-img-clerk"
          src={ClerkLogo}
          alt="Clerk logo"
        />
      </a>
    </div>
  </div>
)

export default HomeBannerFooter
