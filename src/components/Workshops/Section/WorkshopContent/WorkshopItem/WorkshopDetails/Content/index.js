import React from 'react'
import './index.css'

const WorkshopDetailContent = ({
  headline, workshopTitle,
  paragraphOne, bulletsOne,
  paragraphTwo, bulletsTwo,
  paragraphThree
}) => (
  <div className='workshop-item-detail-content'>
    <p className='workshop-item-detail-content-headline'>
      {headline}
    </p>
    {paragraphOne && (
      <p className='workshop-item-detail-content-p1'>
        {paragraphOne}
      </p>
    )}
    {bulletsOne && (
      <div className='workshop-item-detail-content-b1'>
        <ul>
          {bulletsOne.map((bullet, idx) => (
            <li key={idx}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    )}
    {paragraphTwo && (
      <p className='workshop-item-detail-content-p2'>
        {paragraphTwo}
      </p>
    )}
    {bulletsTwo && (
      <div className='workshop-item-detail-content-b2'>
        <ul>
          {bulletsTwo.map((bullet, idx) => (
            <li key={idx}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    )}
    {paragraphThree && (
      <p className='workshop-item-detail-content-p3'>
        {paragraphThree}
      </p>
    )}
  </div>
)

export default WorkshopDetailContent
