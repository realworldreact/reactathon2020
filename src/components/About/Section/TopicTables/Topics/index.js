import React from 'react'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import TypescriptIcon from '../../../../../assets/images/about/topic-tables/typescript.svg'
import HooksIcon from '../../../../../assets/images/about/topic-tables/hooks.svg'
import './index.css'

const TopicsJumpTo = ({ topics }) => (
  <div className='topic-jumpto'>
    {topics.map((topic, idx) => (
      <span>
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
  header: 'Jump to a topic',
  topics: [{
    name: 'Typescript',
    description: 'Typescript is a typed superset of Javascript',
    imgSrc: TypescriptIcon,
    imgAlt: 'typescript',
    managers: [{
      title: '',
      description: '',
      imgSrc: '',
      imgAlt: ''
    }]
  }, {
    name: 'Hooks',
    description: '',
    imgSrc: HooksIcon,
    imgAlt: 'hooks',
    managers: [{
      title: '',
      description: '',
      imgSrc: '',
      imgAlt: ''
    }]
  }]
}

export default Topics
