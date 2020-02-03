import React, { useState } from 'react'
import { getScreenWidth } from '../../../../../utils/window'
import { NATIVE_BREAKPOINT } from '../../../../../constants'
import CaretUpIcon from '../../../../../assets/images/schedule/show-bio-carrot.svg'
import './index.css'


const TableManager = ({ id, className = '', imgSrc, imgAlt, name, title, company, description = '' }) => {
  const isNativeViewport = getScreenWidth() <= NATIVE_BREAKPOINT
  const resetBioLength = 50000
  const [isBioExpanded, toggleBio] = useState(!isNativeViewport)
  const [maxBioLength, setMaxBioLength] = useState(265)
  return (
    <div key={id || name} className={`speaker ${className}`}>
      <div className='speaker-img-wrap'>
        <img className='speaker-img' src={imgSrc} alt={imgAlt} />
      </div>
      <div className='speaker-description'>
        <h2 className='speaker-name'>
          {name}
        </h2>
        <span className='speaker-headline'>
          {title}
        </span>
        <br />
        <span className='speaker-company'>
          {company}
        </span>
        <br />
        <button
          className='table-manager-bio-button'
          onClick={() => toggleBio(!isBioExpanded)}
        >
          {isBioExpanded ? 'Hide' : 'Show'} Bio <img src={CaretUpIcon} alt='caret-up' />
        </button>
        {isBioExpanded && (
            <div className='table-manager-description'>
             {description && description.length > maxBioLength
               ? (
                   <div>
                     {description.substring(0, 264)}
                     <button className='table-manager-description-read-more' onClick={() => setMaxBioLength(resetBioLength)}>
                       Read More
                     </button>
                   </div>
                 )
               : description
             }
           </div>
        )}
      </div>
    </div>
  )
}

const TopicManager = ({ name, title, headline, company, description, imgSrc, imgAlt }) => (
  <div className='topic-manager'>
    <div>
    </div>
    <TableManager
      name={name}
      title={title}
      company={company}
      description={description}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
    />
  </div>
)

export default TopicManager
