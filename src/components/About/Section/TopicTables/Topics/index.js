import React from 'react'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import TopicManagerGrid from '../TopicManager/Grid'
import data from '../../../../../assets/data/about/topic-tables.json'
import {
  TopicImageMap as TOPIC_IMG_MAP,
  TableManagerImageMap as MGR_IMG_MAP
} from './image-map'
import './index.css'

const TopicsJumpTo = ({ topics }) => (
  <div className='topic-jumpto-wrap'>
    <div className='topic-jumpto'>
      <ul>
      {topics.map((topic, idx) => (
        <li key={idx}>
          <a
            className='topic-jumpto-link'
            href={`#topic-${topic.toLowerCase()}`}>
            {topic}
          </a>
          &nbsp;&nbsp;
        </li>
      ))}
      </ul>
      <br />
    </div>
  </div>
)


const TopicHeader = ({ name, description, imgSrc, imgAlt }) => (
  <div className='topic-header'>
    <div className='topic-header-img-wrap'>
      <img className='topic-header-img' src={imgSrc} alt={imgAlt} />
    </div>
    <div>
      <h2 className='topic-tables-topic-header'>
        {name}
      </h2>
      <p className='topic-tables-subtext'>
        {description}
      </p>
    </div>
  </div>
)

const Topic = ({ name, description, imgSrc, imgAlt, managers }) => (
  <div className='topic' id={`topic-${name.toLowerCase()}`}>
    <TopicHeader
      name={name}
      description={description}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
    />
    <TopicManagerGrid
      header='Table Managers'
      managers={managers}
    />
  </div>
)

const TopicList = ({ topics }) => (
  <div className='topic-list'>
    {topics.map((topic,idx) => (
      <Topic
        key={idx}
        name={topic.name}
        description={topic.description}
        imgSrc={topic.imgSrc}
        imgAlt={topic.imgAlt}
        managers={topic.managers}
      />
    ))}
  </div>
)

const Topics = ({ header, topics }) => (
  <section className='topics'>
    <SubPageSectionHeader text={header} className='topic-tables-topic-header' />
    <TopicsJumpTo topics={topics.map(topic => topic.name)} />
    <br />
    <TopicList topics={topics} />
  </section>
)

Topics.defaultProps = {
  // header: data.section.h3Slab,
  topics: data.topics.map(topic => {
    return {
      ...topic,
      imgAlt: topic.name.toLowerCase(),
      imgSrc: TOPIC_IMG_MAP[topic.name.toLowerCase().split(' ').join('-')],
      managers: topic.managers.map(manager => ({
        ...manager,
        name: manager.name,
        headline: manager.bio,
        title: manager.title,
        company: manager.company,
        description: manager.bio || manager.description,
        imgSrc: MGR_IMG_MAP[manager.name.toLowerCase().split(' ').join('-')] || '',
        imgAlt: manager.name.toLowerCase()
      }))
    }
  })
}

export default Topics
