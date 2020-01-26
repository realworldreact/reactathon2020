import React from 'react'
import './index.css'


const TableManager = ({ id, className = '', imgSrc, imgAlt, name, title, headline, company, description = 'Sample text' }) => {
  console.log('tm', id, imgSrc, name, headline, description )
  return (<div key={id} className={`speaker ${className}`}>
    <div className='speaker-img-wrap'>
      <img className='speaker-img' src={imgSrc} alt={imgAlt} />
    </div>
    <div className='speaker-description'>
      <h2 className='speaker-name'>
        {name}
      </h2>
      <span className='speaker-headline'>
        {headline}
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
                <button className='table-manager-description-read-more' role='button'>Read More</button>
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
      headline={headline}
      company={company}
      description={description}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
    />
  </div>
)

export default TopicManager
