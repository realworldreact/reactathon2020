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
      <a href="https://goo.gl/maps/CrBu9xFyHWEPw38s7" target="_blank">{locationVenueName}</a>
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
    <div>
      <LineButton
        className='venue-line-btn'
        text={lineButtonText}
        href={lineButtonURL}
        target={'_blank'}
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
    <br /><br /><strong>Official &amp; recommended hotels coming soon.</strong>
  </div>
)

export default Venue
