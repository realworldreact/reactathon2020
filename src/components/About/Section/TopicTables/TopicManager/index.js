import React from 'react'
import './index.css'


const TableManager = ({ id, className = '', imgSrc, imgAlt, name, title, company, description = 'Sample text' }) => {
  return (<div key={id || name} className={`speaker ${className}`}>
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
      <div className='table-manager-description'>
        {description.length > 265
          ? (
              <div>
                {description.substring(0, 264)}
                <button className='table-manager-description-read-more'>
                  Read More
                </button>
              </div>
            )
          : description
        }
      </div>
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
