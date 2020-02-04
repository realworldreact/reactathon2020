import React from 'react'
import './index.css'
import LineButton from '../../../../LineButton'


const HotelLeft = ({
  locationImgOne, locationImgTwo, locationImgThree,
  locationImgFour
}) => (
  <div className='hotel-left-grid'>
    <img src={locationImgOne} alt='hotel-img-1' />
    <img src={locationImgTwo} alt='hotel-img-2' />
    <img src={locationImgThree} alt='hotel-img-3' />
    <img src={locationImgFour} alt='hotel-img-4' />
  </div>
)

const HotelRight = ({
  locationTitle, locationVenueName, locationDescription,
  mapLocationIcon, lineButtonText, lineButtonURL
}) => (
  <div className='hotel-right-grid'>
    <h2 className='vh-header'>
      {locationTitle}
    </h2>
    <span>
      <img src={mapLocationIcon} alt='map' />&nbsp;
      {locationVenueName}
    </span>
    <p className='vh-description'>
      {locationDescription}
    </p>
    <LineButton
      text={lineButtonText}
      href={lineButtonURL}
      isExternalLink={true}
    />
  </div>
)


const Hotel = ({
  locationTitle, locationVenueName, locationDescription,
  mapLocationIcon, locationImgOne, locationImgTwo, locationImgThree,
  locationImgFour, lineButtonText, lineButtonURL
}) => (
  <div className='hotel'>
    <div className='hotel-grid'>
      <HotelLeft
        locationImgOne={locationImgOne}
        locationImgTwo={locationImgTwo}
        locationImgThree={locationImgThree}
        locationImgFour={locationImgFour}
      />
      <HotelRight
        locationTitle={locationTitle}
        locationVenueName={locationVenueName}
        locationDescription={locationDescription}
        mapLocationIcon={mapLocationIcon}
        lineButtonText={lineButtonText}
        lineButtonURL={lineButtonURL}
      />
    </div>
  </div>
)

export default Hotel
