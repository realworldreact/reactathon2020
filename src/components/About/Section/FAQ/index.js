import React from 'react'
import FAQSection from './Section'
import { getEmbedUrl } from '../../../../utils/video'
import faqData from '../../../../assets/data/about/faq.json'
import './index.css'

const FAQ = ({ header, headerText, questions }) => (
  <section className='section-faq'>
    <FAQSection
      header={header}
      headerText={headerText}
      questions={questions}
    />
  </section>
)

const getData = (data) => {
  const emptyData = {
    header: null,
    headerText: null,
    questions: []
  }
  if (!data || !data.length) {
    return emptyData
  }
  const qData = [...data]
  qData.shift()
  const res = {
    header: 'Frequently Asked Questions',
    headerText: data[0].details,
    questions: qData.map(qData => ({
      ...qData,
      video: qData.video ? getEmbedUrl(qData.video) : null
    }))
  }
  console.log('rest', res)
  return res
}

FAQ.defaultProps = {
  ...getData(faqData)
}

export default FAQ
