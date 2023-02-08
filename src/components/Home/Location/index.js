import React from 'react'
import SectionTitle from '../SectionTitle'
import Item from './Item'
import './index.css'
import imgVeneue from '../../../assets/images/home/location/location-veneue.jpg'
import imgHomeBase from '../../../assets/images/home/location/location-home-base.jpg'

const locationData = [
  {
    locationTitle: 'A truly epic venue',
    imgSrc: imgVeneue,
    descriptionTitle: 'Congregation Sherith Israel',
    description: 'This venue strikes the perfect balance of historical & modern -- with an epic cathedral to host the conference talks & a modern conference center for the networking & sponsor expo.',
    ctaUrl: '/about/venue-and-hotel'
  },
  {
    locationTitle: 'Our home base',
    imgSrc: imgHomeBase,
    descriptionTitle: 'Pacific Heights & Japantown, SF',
    description: 'Pacific Heights is one of the most beautiful, clean, and safe neighbhorhoods in San Francisco. Our venue is situated between two beautiful city parks, steps from numerous cafes, restaurants, bars, karaoke, incredible architecture everywhere you turn, public transportation, and is also a 10-minute walk to the hotel in lovely Japantown.',
    ctaUrl: '/about/venue-and-hotel'
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
