import React from 'react'
import Speaker from '../Speaker'
import './index.css'

const MasterOfCeremonies = ({speaker}) => {
  const [mc1/* , mc2 */] = speaker
  return (
    <div className="speaker-moc">
      <div>
        <h2 className="speaker-moc-header">Masters of Ceremonies</h2>
        <div>
          <Speaker
            className="speaker-moc-speaker"
            imgSrc={mc1.imgSrc}
            imgAlt={mc1.imgAlt}
            name={mc1.name}
            headline={mc1.headline}
            company={mc1.company}
          />
          {/* <Speaker
            className="speaker-moc-speaker"
            imgSrc={mc2.imgSrc}
            imgAlt={mc2.imgAlt}
            name={mc2.name}
            headline={mc2.headline}
            company={mc2.company}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default MasterOfCeremonies
