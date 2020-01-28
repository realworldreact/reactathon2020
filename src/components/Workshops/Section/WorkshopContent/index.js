import React from 'react'
import WorkshopItem from './WorkshopItem'
import workshopsData from '../../../../assets/data/workshops/workshops.json'
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

const WorkshopContent = ({ header, workshops }) => (
  <section className='workshop-content'>
    <WorkshopHeader title={header.title} description={header.description} />
    <Workshops
      items={workshops}
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
    workshops: tail
  }
}

WorkshopContent.defaultProps = {
  ...getWorkshopsData(workshopsData)
}

export default WorkshopContent
