import React from 'react'
import Banner from '../../Banner'
import PodcastBannerContent from './Content'
import './index.css'

const PodcastBanner = ({ title, description }) => (
  <Banner
    className='banner-content-page podcast-banner banner-overlay'
    content={<PodcastBannerContent title={title} description={description} />}
  />
)

export default PodcastBanner
