import React from 'react'
import LineButton from '../../../../LineButton'
import './index.css'

const VenueRight = ({ locationTitle, locationVenueName, locationDescription, mapLocationIcon }) => (
  <div className='venue-right-grid'>
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
  </div>
)

const VenueLeft = ({ locationImgOne, lineButtonText, lineButtonURL }) => (
  <div className='venue-left-grid'>
    <div className='venue-img'>
      <img src={locationImgOne} alt='venue-location' />
    </div>
    <div className='venue-line-btn'>
      <LineButton
        text={lineButtonText}
        href={lineButtonURL}
        isExternalLink={true}
      />
    </div>
  </div>
)

const Venue = ({
  locationTitle, locationVenueName, locationDescription,
  mapLocationIcon, locationImgOne, lineButtonText, lineButtonURL
}) => (
  <div className='venue'>
    <div className='venue-grid'>
      <VenueLeft
        locationImgOne={locationImgOne}
        lineButtonText={lineButtonText}
        lineButtonURL={lineButtonURL}
      />
      <VenueRight
        locationTitle={locationTitle}
        locationVenueName={locationVenueName}
        locationDescription={locationDescription}
        mapLocationIcon={mapLocationIcon}
      />
    </div>
  </div>
)

export default Venue
