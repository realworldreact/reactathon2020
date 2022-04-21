import React from 'react'
import WorkshopItem from './WorkshopItem'
import workshopsData from '../../../../assets/data/workshops/workshops.json'
import freeWorkshopsData from '../../../../assets/data/workshops/free-workshops.json'
import SPEAKER_IMG_MAP from './image-map'
import SPEAKER_IMG_PLACEHOLDER from '../../../../assets/images/Speakers/speaker-tbd.jpg'
import './index.css'

const WorkshopHeader = ({ title, description }) => (
  <div className='workshops-header'>
    <h2 className='workshops-header-title'>
      {title}
    </h2>
    <p className='workshops-header-description'>
      {description}
    </p>
  </div>
)

const Workshops = ({ items }) => (
  <div className='workshops-grid-wrap'>
    <div className='workshops-grid'>
      {items.map((item, idx) => (
        <WorkshopItem
          key={idx}
          {...item}
        />
      ))}
    </div>
  </div>
)

const WorkshopContent = ({ workshop, freeWorkshop }) => (
  <section className='workshop-content'>
    <WorkshopHeader title={workshop.header.title} description={workshop.header.description} />
    <Workshops
      items={workshop.workshops}
    />
    {/* Free workshop */}
    <WorkshopHeader title={freeWorkshop.header.title} description={freeWorkshop.header.description} />
    <Workshops
      items={freeWorkshop.workshops}
    />
  </section>
)

const getWorkshopsData = (jsonData) => {
  if (!jsonData) return {
    header: {},
    workshops: []
  }
  const head = jsonData[0]
  const tail = jsonData[1] ? jsonData[1].workshops : []
  return {
    header: {
      title: head.headline,
      description: head.paragraph || []
    },
    workshops: tail.map(item => {
      const imageSpeaker = SPEAKER_IMG_MAP[item.name.toLowerCase().split(' ').join('-')] || SPEAKER_IMG_PLACEHOLDER

      return {
        ...item,
        photo: imageSpeaker
      }
    })
  }
}

WorkshopContent.defaultProps = {
  workshop: { ...getWorkshopsData(workshopsData) },
  freeWorkshop: { ...getWorkshopsData(freeWorkshopsData) }
}

export default WorkshopContent
