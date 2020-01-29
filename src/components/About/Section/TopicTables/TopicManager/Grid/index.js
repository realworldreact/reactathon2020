import React from 'react'
import LineHeader from '../../../../../LineHeader'
import TopicManager from '../'
import './index.css'

const TopicManagerGrid = ({ header, managers }) => {
    return (<div className='topic-managers'>
      <div className='topic-managers-header-wrap'>
        <div>
        </div>
        <h2>
          <LineHeader
            text={header}
            className={'topic-managers-header'}
          />
        </h2>
      </div>
      {managers.map((manager, idx) => (
        <TopicManager
          key={idx}
          name={manager.name}
          title={manager.title}
          company={manager.company}
          description={manager.description}
          imgSrc={manager.imgSrc}
          imgAlt={manager.imgAlt}
        />
      ))}
    </div>
)
}

export default TopicManagerGrid
