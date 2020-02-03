import VenueImg from '../../../../assets/images/about/venue/venue-1.jpg'
import HotelImg1 from '../../../../assets/images/about/venue/hotel-1.jpg'
import HotelImg2 from '../../../../assets/images/about/venue/hotel-2.jpg'
import HotelImg3 from '../../../../assets/images/about/venue/hotel-3.jpg'
import HotelImg4 from '../../../../assets/images/about/venue/hotel-4.jpg'
import MapIcon from '../../../../assets/icons/about/map-location-icon.svg'

const VenueAndHotelImageMap = {
  venue: {
    mapIcon: MapIcon,
    locationImg: [ VenueImg ]
  },
  hotel: {
    mapIcon: MapIcon,
    locationImg: [
      HotelImg1,
      HotelImg2,
      HotelImg3,
      HotelImg4
    ]
  }
}
export default VenueAndHotelImageMap
