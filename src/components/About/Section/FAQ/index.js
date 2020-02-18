import React from 'react'
import FAQSection from './Section'
import faqData from '../../../../assets/data/about/faq.json'
import './index.css'

const FAQ = ({ header, headerText, sectionId }) => {
  console.log('Faq Section Id', sectionId)
  return (
    <section className='section-faq'>
      <FAQSection
        header={header}
        headerText={headerText}
        sectionId={sectionId}
      />
    </section>
  )
}

FAQ.defaultProps = {
  header: 'Frequently Asked Questions',
  headerText: faqData && faqData.length > 0 ? faqData[0].details : '',
}

export default FAQ
