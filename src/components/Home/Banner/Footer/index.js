import React from 'react'
import FlexportLogo from '../../../../assets/images/home/header/header-flexport-logo.svg'
import RWRLogo from '../../../../assets/images/home/header/header-rwr-logo.svg'
import './index.css'

const HomeBannerFooterSponsorImg = ({ src, className }) => (
  <img 
    className={className}
    src={src}
  />
)

const HomeBannerFooter = () => (
  <div className='home-banner-footer'>
    Presented by 
      <HomeBannerFooterSponsorImg 
        className= 'home-banner-footer-sponsor-img home-banner-footer-sponsor-img-rwr' 
        src={RWRLogo} 
      />
    &
      <HomeBannerFooterSponsorImg 
        className='home-banner-footer-sponsor-img home-banner-footer-sponsor-img-flexport' 
        src={FlexportLogo} 
      />
  </div>
)

export default HomeBannerFooter
