import React from 'react'
import PageContentLayout from '../../layouts/page-content'
import Banner from '../../components/Banner'
import CalIcon from '../../assets/icons/home/calendar-icon-home.svg'
import FlexportLogo from '../../assets/images/home/header/header-flexport-logo.svg'
import RWRLogo from '../../assets/images/home/header/header-rwr-logo.svg'
import './index.css'

const HomeBannerFooterSponsorImg = ({ src, className }) => (
  <img 
    className={className}
    src={src}
  />
)

const HomeBannerContent = () => (
  <div className='home-banner-content'>
    <div className='home-banner-h1'>
      The San Francisco React Conference
    </div>
    <div className='home-banner-p'>
      Reactathon is a developer conference featuring 2 days of technical talks,
      networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.
    </div>
    <div className='home-banner-date'>
      <img src={CalIcon} alt='cal' /> &nbsp;
      March 30 - 31, 2020
    </div>
    <div className='home-banner-cta'>
      <a href='#'>
        <button className='home-banner-cta-btn'>
          Buy Tickets
        </button>
      </a>
    </div>
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
  </div>
)

const Home = () => (
  <PageContentLayout>
    <section className='home-section'>
      <Banner 
        className='home-banner'
        content={<HomeBannerContent />}
      />
    </section>
  </PageContentLayout>
)

export default Home
