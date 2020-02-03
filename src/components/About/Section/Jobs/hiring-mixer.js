import React from 'react'
import SubPageSectionHeader from '../../../SubPageSectionHeader'
import AboutSectionDateTime from '../AboutSectionDateTime'
import TextWithHtml from '../../../TextWithHtml'
import LineButton from '../../../LineButton'

const HiringMixer = ({ title, date, time, subtext, contactInfo, buttonText, buttonHref }) => (
  <div className='section-jobs-hiring-mixer'>
    <SubPageSectionHeader text={title} className='section-jobs-header' />
    <AboutSectionDateTime date={date} time={time} />
    <p>
      <TextWithHtml
        placeholder={contactInfo.placeholder}
        replaceLink={contactInfo.href}
        replaceText={contactInfo.text}
        text={subtext}
      />
    </p>
    <LineButton
      className='sections-jobs-hiring-mixer-cta-btn'
      href={buttonHref}
      text={buttonText}
      isExternalLink={true}
    />
  </div>
)

export default HiringMixer
