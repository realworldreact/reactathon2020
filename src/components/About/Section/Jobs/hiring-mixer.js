import React from 'react'
import SubPageSectionHeader from '../../../SubPageSectionHeader'
import AboutSectionDateTime from '../AboutSectionDateTime'

const HiringMixer = ({ title, date, time, subtext }) => (
  <div className='section-jobs-hiring-mixer'>
    <SubPageSectionHeader text={title} className='section-jobs-header' />
    <AboutSectionDateTime date={date} time={time} />
    {subtext}
  </div>
)

export default HiringMixer
