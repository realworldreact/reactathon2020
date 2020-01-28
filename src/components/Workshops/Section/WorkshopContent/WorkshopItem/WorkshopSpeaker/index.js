import React from 'react'
import './index.css'

const Speaker = ({ id, className = '', imgSrc, imgAlt, name, headline, company, bio }) => (
  <div key={id} className={`${className}`}>
    <div className='workshop-item-speaker-img'>
      <img className='speaker-img' src={imgSrc} alt={imgAlt} />
    </div>
    <span className='workshop-item-speaker-name'>
      {name}
    </span>
    <span className='workshop-item-speaker-title'>
      {headline}
    </span>
    <span className='workshop-item-speaker-company'>
      {company}
    </span>
    <button className='workshop-item-speaker-bio-button'>
      More about {name && name.split(' ')[0]}
    </button>
    <div className='workshop-item-speaker-bio'>
      {bio}
    </div>
  </div>
)

const WorkshopSpeaker = ({ name, photo }) => (
  <div className='workshop-item-speaker'>
    <Speaker name={name} />
  </div>
)

export default WorkshopSpeaker
