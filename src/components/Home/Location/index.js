import React from 'react'
import SectionTitle from '../SectionTitle'
import Item from './Item'
import './index.css'
import imgVeneue from '../../../assets/images/home/location/location-veneue.jpg'
import imgHomeBase from '../../../assets/images/home/location/location-home-base.jpg'

const locationData = [
  {
    locationTitle: 'An Incredible Outdoor Venue',
    imgSrc: imgVeneue,
    descriptionTitle: 'Cal Shakes Bruns Amphitheater & Grounds',
    description: 'This serene venue is perfect for creating an atmosphere that is as calming, relaxing, and inspiring as it is safe.',
    ctaUrl: '/'
  },
  {
    locationTitle: 'Our Home Base',
    imgSrc: imgHomeBase,
    descriptionTitle: 'Berkeley, CA',
    description: 'Downtown Berkeley is a charming, safe, and delightful place to call our home for this event. You will find plenty of cafes, restaurants, bars, unrivaled hiking & outdoor activities, and public transportation, all within walking distance of the recommended hotels.',
    ctaUrl: '/'
  }
]

const Location = () => {
  return (
    <section className='section-features'>
      <SectionTitle text='Location' className='title-location' />
      {locationData.map((item, i) => <Item key={i} {...item} />)}
    </section>
  )
}

export default Location
