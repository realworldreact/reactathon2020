import React from 'react'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import TypescriptImg from '../../../../../assets/images/about/topic-tables/typescript.svg'
import SuspenseImg from '../../../../../assets/images/about/topic-tables/hooks.svg'
import HooksImg from '../../../../../assets/images/about/topic-tables/hooks.svg'
import DataVizImg from '../../../../../assets/images/about/topic-tables/data-viz.svg'
import GraphQLImg from '../../../../../assets/images/about/topic-tables/graphql.svg'
import JamstackImg from '../../../../../assets/images/about/topic-tables/jamstack.svg'
import NextJsImg from '../../../../../assets/images/about/topic-tables/next.svg'
import ServerlessImg from '../../../../../assets/images/about/topic-tables/serverless.svg'
import EngMgmtImg from '../../../../../assets/images/about/topic-tables/engineering-management.svg'
import WebMediaImg from '../../../../../assets/images/about/topic-tables/web-media.svg'
import TestingImg from '../../../../../assets/images/about/topic-tables/testing.svg'
import data from '../../../../../assets/data/about/topic-tables.json'
import './index.css'

const IMG_MAP = {
  'typescript': TypescriptImg,
  'suspense': SuspenseImg,
  'hooks': HooksImg,
  'next.js': NextJsImg,
  'data-visualizations': DataVizImg,
  'jamstack': JamstackImg,
  'testing': TestingImg,
  'serverless': ServerlessImg,
  'graphql': GraphQLImg,
  'engineering-management': EngMgmtImg,
  'web-media': WebMediaImg
}

const TopicsJumpTo = ({ topics }) => (
  <div className='topic-jumpto'>
    {topics.map((topic, idx) => (
      <span key={idx}>
        <a
          className='topic-jumpto-link'
          href={`#topic-${topic.toLowerCase()}`}>
          {topic}
        </a>
        &nbsp;&nbsp;
      </span>
    ))}
  </div>
)

const TopicManagers = ({ managers }) => (
  <div className='topic-managers'>
    {managers.map((manager, idx) => (
      <TopicManager
        key={idx}
        title={manager.title}
        description={manager.description}
        imgSrc={manager.imgSrc}
        imgAlt={manager.imgAlt}
      />
    ))}
  </div>
)

const TopicManager = ({ title, description, imgSrc, imgAlt }) => (
  <div className='topic-manager'>
    <div>
    </div>
    <h2>Table Managers</h2>
  </div>
)

const TopicHeader = ({ name, description, imgSrc, imgAlt }) => (
  <div className='topic-header'>

    <img src={imgSrc} alt={imgAlt} />
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
    <TopicManagers
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
    <TopicList topics={topics} />
  </section>
)

Topics.defaultProps = {
  header: data.h3Slab,
  topics: data.topics.map(topic => {
    return {
      ...topic,
      imgAlt: topic.name.toLowerCase(),
      imgSrc: IMG_MAP[topic.name.toLowerCase().split(' ').join('-')],
      managers: topic.managers.map(manager => ({
        ...manager,
        imgAlt: manager.name.toLowerCase()
      }))
    }
  })
}

export default Topics
