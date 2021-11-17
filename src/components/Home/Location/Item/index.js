import React from 'react'
import './index.css'
import LineButton from "../../../LineButton";

const Item = ({ locationTitle, imgSrc, descriptionTitle, description, ctaUrl }) => {
  return (
    <div className="location-item">
      <p className="location-item-title">{locationTitle}</p>
      <div className="location-item-content">
        <div className="location-item-img">
          <img src={imgSrc} alt={locationTitle} />
        </div>
        <div className="location-description">
          <p className="location-description-title">{descriptionTitle}</p>
          <p className="location-description-text">{description}</p>
          <LineButton
            isExternalLink={false}
            className='location-cta-btn'
            text='Learn more'
            href={ctaUrl}
          />
        </div>
      </div>
    </div>
  )
}

export default Item
