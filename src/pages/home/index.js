import React from 'react'
import PageContentLayout from '../../layouts/page-content'
import Banner from '../../components/Banner'
import './index.css'

const HomeBannerContent = () => (
  <div className='home-banner-content'>
    Main thing
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
