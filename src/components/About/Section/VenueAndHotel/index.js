import React from 'react'
import VenueAndHotelData from '../../../../assets/data/about/venue-and-hotel.json'
import VENUE_AND_HOTEL_IMG_MAP from './image-map'
import Venue from './Venue'
import './index.css'


const VHGrid = ({ venue, hotel }) => (
  <div className='vh-grid'>
    <Venue {...venue} />
  </div>
)

const VenueAndHotel = ({ venue, hotel }) => (
  <section className='venue-and-hotel'>
    <VHGrid venue={venue} hotel={hotel} />
  </section>
)

const getData = (data) => {
  if (!data || !data.length) {
    return {
      venue: null,
      hotel: null
    }
  }
  const result = {
    venue: {
      ...data[0],
      mapLocationIcon: VENUE_AND_HOTEL_IMG_MAP.venue.mapIcon,
      locationImgOne: VENUE_AND_HOTEL_IMG_MAP.venue.locationImg[0]
    }
  }
  return result
}

VenueAndHotel.defaultProps = {
  ...getData(VenueAndHotelData)
}

export default VenueAndHotel
