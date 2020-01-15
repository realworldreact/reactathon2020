import React from 'react'
import './index.css'

const FeatureGridItem = ({ className, imgSrc, imgAlt, title, description, ctaUrl }) => (
  <div class={`feature ${className}`}>
    <img src={imgSrc} alt={imgAlt} />
    <div class='feature-copy'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <a href={ctaUrl} class='btn-primary'>Learn more</a>
      </p>
    </div>
  </div>
)

const FeaturesGrid = ({ features }) => (
  <div class='features-grid'>
      {features.map(feature => (
        <FeatureGridItem 
          imgSrc={feature.imgSrc}
          imgAlt={feature.imgAlt}
          title={feature.title}
          description={feature.description}
          ctaUrl={feature.ctaUrl}
        />
      ))}
  </div>
)

FeaturesGrid.defaultProps = {
  features: [{
    description: 'test',
    title: 'test',
    imgSrc: 'https://www.reactathon.com/img/events/reception.svg',
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'test',
    imgSrc: 'https://www.reactathon.com/img/events/reception.svg',
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'test',
    imgSrc: 'https://www.reactathon.com/img/events/reception.svg',
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'test',
    imgSrc: 'https://www.reactathon.com/img/events/reception.svg',
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'test',
    imgSrc: 'https://www.reactathon.com/img/events/reception.svg',
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'test',
    imgSrc: 'https://www.reactathon.com/img/events/reception.svg',
    imgAlt: 'test',
    ctaUrl: 'test'
  }]
}

export default FeaturesGrid
