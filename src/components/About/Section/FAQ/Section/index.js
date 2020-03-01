import React /* , { useState, useEffect } */ from 'react'
import ContentNavMenu from '../../../../ContentNavMenu'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import Video from '../../../../Video'
import TextWithHtml from '../../../../TextWithHtml'
import faqData from '../../../../../assets/data/about/faq.json'
import { getEmbedUrl } from '../../../../../utils/video'
import { keys, values, flatten } from 'lodash'
import './index.css'

// Pad all questions in COVID-19 except the 1st question
const isPaddedQuestionBlock = (sectionId, idx) => (idx !== 0 && sectionId === 'covid19')

const FAQQuestion = ({ question, className = '' }) => (
  <h2 className={`faq-question ${className}`}>
    {question}
  </h2>
)

const FAQAnswer = ({ answer, className = '', linkData = { } }) => (
  <div className={`faq-answer ${className}`}>
    <TextWithHtml
      linkClassName='faq-link'
      text={answer}
      placeholder={linkData.placeholder}
      replaceLink={linkData.href}
      replaceText={linkData.text}
      isExternal={linkData.isExternal}
    />
  </div>
)

const FAQQABullets = ({ bullets }) => (
  <ul className='faq-bullets'>
    {bullets.map((bullet, idx) => (
      <li
        className='faq-bullet'
        key={idx}
      >
        {bullet}
      </li>
    ))}
  </ul>
)

const FAQQA = ({ key, sectionId, question, answer, video, answerTwo, answerThree, answerFour, links, bullets }) => (
  <div className='faq-block'>
    {question && (
      <FAQQuestion
        className={isPaddedQuestionBlock(sectionId, key) ? 'faq-question-padded' : ''}
        question={question}
      />
    )}
    {answer && <FAQAnswer answer={answer} linkData={links ? links.answer : {}} />}
    {bullets && <FAQQABullets bullets={bullets} />}
    {video && (
      <Video
        className='faq-video'
        isExternalSource={true}
        src={video}
        allowFullScreen
      />
    )}
    {answerTwo && (
      <div>
        <FAQAnswer answer={answerTwo} linkData={links ? links.answerTwo : {}} />
        <br />
      </div>
    )}
    {answerThree && (
      <div>
        <FAQAnswer answer={answerThree} linkData={links ? links.answerThree : {}} />
        <br />
      </div>
    )}
    {answerFour && (
      <div>
        <FAQAnswer answer={answerFour} linkData={links ? links.answerFour : {}} />
        <br />
      </div>
    )}
  </div>
)

const FAQSubsection = ({ questions, sectionId }) => (
  <div id={sectionId} className='faq-sub-section'>
    {questions.map((question, idx) => (
      <FAQQA
        key={idx}
        sectionId={sectionId}
        question={question.question}
        answer={question.answer}
        video={question.video}
        answerTwo={question.answerTwo}
        answerThree={question.answerThree}
        answerFour={question.answerFour}
        links={question.links}
        bullets={question.bullets}
      />
    ))}
  </div>
)

const FAQNav = ({ items, sectionId }) => (
  <div className='faq-nav'>
    <ContentNavMenu
      showDivider={false}
      className='faq-content-nav-menu'
      items={items.map(item => ({
        ...item,
        className: 'faq-content-nav-item',
        activeLinkClassName: 'faq-content-nav-item-is-active',
        isActiveHandler: () =>  {
          return sectionId === item.id
        }
      }))}
    />
  </div>
)

FAQNav.defaultProps = {
  items: [{
    id: 'general',
    href: '/about/faq/general',
    text: 'General'
  }, {
    id: 'workshops',
    href: '/about/faq/workshops',
    text: 'Workshops'
  }, {
    id: 'amenities',
    href: '/about/faq/amenities',
    text: 'Amenities'
  }, {
    id: 'logistics',
    href: '/about/faq/logistics',
    text: 'Logistics'
  }, {
    id: 'policies',
    href: '/about/faq/policies',
    text: 'Policies'
  }, {
    id: 'covid19',
    href: '/about/faq/covid19',
    text: 'COVID-19'
  }]
}

const FAQSection = ({ header, headerText, sectionId }) => {
  const sectionData = getData({ data: faqData, sectionId })
  return (
    <div id='faq' className='faq'>
      <SubPageSectionHeader text={header} className='faq-header' />
      {/* <p className='faq-header-text'>
        {headerText}
      </p> */}
      <FAQNav sectionId={sectionId} />
      <FAQSubsection
        sectionId={sectionId}
        title={sectionData.title}
        questions={sectionData.questions}
      />
    </div>
  )
}

const getData = ({ data, sectionId }) => {
  const emptyData = {
    title: null,
    questions: []
  }
  if (!data || !data.length) {
    return emptyData
  }

  // Sanitize data
  const allSectionData = [...data]
  allSectionData.shift()

  const allKeys = flatten(allSectionData.map(section => keys(section)))
  const allValues = flatten(allSectionData.map(section => values(section)))
  const sectionIdx = allKeys.findIndex(k => k === sectionId)

  const finalSectionIdx = sectionIdx !== -1 ? sectionIdx : 0 // default to first item / general

  const res = {
    title: allKeys[finalSectionIdx],
    questions: allValues[finalSectionIdx]
      .map(qData => ({
        ...qData,
        bullets: qData.bullets ? values(qData.bullets) : [],
        video: qData.video ? getEmbedUrl(qData.video) : null
      }))
  }
  return res
}

export default FAQSection
