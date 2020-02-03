import React from 'react'
import contentData from  '../../../assets/data/code-of-conduct/content.json'
import './index.css'

const Bullets = ({ items, highlight = false, showDots = false }) => (
  <div className={`conduct-bullets
    ${highlight ? 'conduct-bullets-highlight' : ''}
    ${showDots ? 'conduct-bullets-show-dots' : ''}`
  }>
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const Header = ({ text }) => (
  <h2 className='conduct-header'>
    {text}
  </h2>
)

const Paragraph = ({ text }) => (
  <p className='conduct-paragraph'>
    {text}
  </p>
)

const ConductSection = ({
  data
}) => {
  const { paragraphOne, paragraphTwo, paragraphThree,
    numberBullets, headerOne, paragraphFour, paragraphFive,
    paragraphSix, bulletsOne, headerTwo, paragraphSeven,
    paragraphEight, paragraphNine, headerThree,
    paragraphTen, paragraphEleven,
    bulletsTwo, paragraphTwelve,
    paragraphThirteen, paragraphFourteen, headerFour,
    paragraphFifteen, paragraphSixteen, paragraphSeventeen,
    headerFive, paragraphEighteen,
    bulletsThree } = data
  return (
    <div className='conduct-section-content-data'>
      <Paragraph text={paragraphOne} />
      <Paragraph text={paragraphTwo} />
      <Paragraph text={paragraphThree} />
      <Bullets items={numberBullets} highlight />
      <Header text={headerOne} />
      <Paragraph text={paragraphFour} />
      <Paragraph text={paragraphFive} />
      <Paragraph text={paragraphSix} />
      <Bullets items={bulletsOne} showDots />
      <Header text={headerTwo} />
      <Paragraph text={paragraphSeven} />
      <Paragraph text={paragraphEight} />
      <Paragraph text={paragraphNine} />
      <Header text={headerThree} />
      <Paragraph text={paragraphTen} />
      <Paragraph text={paragraphEleven} />
      <Bullets items={bulletsTwo} showDots />
      <Paragraph text={paragraphTwelve} />
      <Paragraph text={paragraphThirteen} />
      <Paragraph text={paragraphFourteen} />
      <Header text={headerFour} />
      <Paragraph text={paragraphFifteen} />
      <Paragraph text={paragraphSixteen} />
      <Paragraph text={paragraphSeventeen} />
      <Header text={headerFive} />
      <Paragraph text={paragraphEighteen} />
      <Bullets items={bulletsThree} showDots />
    </div>
  )
}

ConductSection.defaultProps = {
  data: contentData
}


export default ConductSection
