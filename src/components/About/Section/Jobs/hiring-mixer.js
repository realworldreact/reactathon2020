import React from 'react'
import SubPageSectionHeader from '../../../SubPageSectionHeader'
import AboutSectionDateTime from '../AboutSectionDateTime'
import LineButton from '../../../LineButton'

const HiringMixer = ({ title, date, time, subtext, buttonText, buttonHref }) => (
  <div className='section-jobs-hiring-mixer'>
    <SubPageSectionHeader text={title} className='section-jobs-header' />
    <AboutSectionDateTime date={date} time={time} />
    <p>{subtext}</p>
    <LineButton
      className='sections-jobs-hiring-mixer-cta-btn'
      href={buttonHref}
      text={buttonText}
    />
  </div>
)

export default HiringMixer
