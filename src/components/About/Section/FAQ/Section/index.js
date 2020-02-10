import React from 'react'
import Video from '../../../../Video'
import TextWithHtml from '../../../../TextWithHtml'
import './index.css'

const FAQQuestion = ({ question, answer, video, answerTwo, answerLinkPlaceholder = '###' }) => (
  <div className='faq-block'>
    <h2 className='faq-question'>
      {question}
    </h2>
    <p className='faq-answer'>
      {answer}
      {/* <TextWithHtml
        text={answer}
        placeholder={answerLinkPlaceholder}
        replaceLink={}
        replaceText={}
      /> */}
    </p>
    {video && (
      <Video
        className='faq-video'
        isExternalSource={true}
        src={video}
        allowFullScreen
      />
    )}
    {answerTwo && (
      <p className='faq-answer'>
        {answerTwo}
      </p>
    )}
  </div>
)

const FAQSection = ({ header, headerText, questions }) => (
  <div className='faq-section'>
    <h2 className='faq-section-header'>
      {header}
    </h2>
    <p className='faq-section-header-text'>
      {headerText}
    </p>
    {questions.map((question,idx) => (
      <FAQQuestion
        key={idx}
        question={question.question}
        answer={question.answer}
        video={question.video}
        answerTwo={question.answerTwo}
      />
    ))}
  </div>
)

export default FAQSection
