import React from 'react'
import VenueAndHotelData from '../../../../assets/data/about/venue-and-hotel.json'
import VENUE_AND_HOTEL_IMG_MAP from './image-map'
import Hotel from './Hotel'
import Venue from './Venue'
import './index.css'


const VHGrid = ({ venue, hotel }) => (
  <div className='vh-grid'>
    <Venue {...venue} />
    <Hotel {...hotel} />
  </div>
)

const VenueAndHotel = ({ venue, hotel }) => (
  <section className='venue-and-hotel'>
    <VHGrid venue={venue} hotel={hotel} />
    Coming Soon
  </section>
)

const getData = (data) => {
  if (!data || !data.length) {
    return {
      venue: null,
      hotel: null
    }
  }
  return {
    venue: data[0].map(data => ({
      ...data,
      mapLocationIcon: VENUE_AND_HOTEL_IMG_MAP.venue.mapIcon,
      locationImgOne: VENUE_AND_HOTEL_IMG_MAP.venue.locationImg[0]
    })),
    hotel: data[1].map(data => ({
      ...data,
      mapLocationIcon: VENUE_AND_HOTEL_IMG_MAP.hotel.mapIcon,
      locationImgOne: VENUE_AND_HOTEL_IMG_MAP.hotel.locationImg[0],
      locationImgTwo: VENUE_AND_HOTEL_IMG_MAP.hotel.locationImg[1],
      locationImgThree: VENUE_AND_HOTEL_IMG_MAP.hotel.locationImg[2],
      locationImgFour: VENUE_AND_HOTEL_IMG_MAP.hotel.locationImg[3]
    }))
  }

}

VenueAndHotel.defaultProps = {

}

export default VenueAndHotel
