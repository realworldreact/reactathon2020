import React from 'react'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import Video from '../../../../Video'
import TextWithHtml from '../../../../TextWithHtml'
import './index.css'

const FAQQuestion = ({ question }) => (
  <h2 className='faq-question'>
      {question}
  </h2>
)

const FAQAnswer = ({ answer, linkData = { } }) => (
  <p className='faq-answer'>
    <TextWithHtml
      linkClassName='faq-link'
      text={answer}
      placeholder={linkData.placeholder}
      replaceLink={linkData.href}
      replaceText={linkData.text}
      isExternal={linkData.isExternal}
    />
  </p>
)

const FAQQA = ({ question, answer, video, answerTwo, answerThree, answerFour, links }) => (
  <div className='faq-block'>
    <FAQQuestion question={question} />
    <FAQAnswer answer={answer} linkData={links ? links.answer : {}} />
    {video && (
      <Video
        className='faq-video'
        isExternalSource={true}
        src={video}
        allowFullScreen
      />
    )}
    <FAQAnswer answer={answerTwo} linkData={links ? links.answerTwo : {}} />
    <FAQAnswer answer={answerThree} linkData={links ? links.answerThree : {}} />
    <FAQAnswer answer={answerFour} linkData={links ? links.answerFour : {}} />
  </div>
)

const FAQSubsection = ({ questions, sectionId }) => (
  <div id={sectionId} className='faq-sub-section'>
    {questions.map((question,idx) => (
      <FAQQA
        key={idx}
        question={question.question}
        answer={question.answer}
        video={question.video}
        answerTwo={question.answerTwo}
        answerThree={question.answerThree}
        answerFour={question.answerFour}
        links={question.links}
      />
    ))}
  </div>
)

const FAQSection = ({ header, headerText, questions }) => (
  <div className='faq'>
    <SubPageSectionHeader text={header} className='faq-header' />
    <p className='faq-header-text'>
      {headerText}
    </p>


  </div>
)

export default FAQSection
