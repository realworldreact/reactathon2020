import React from 'react'
import TopicTables from '../TopicTables'
import AskReactTeam from '../AskReactTeam'
import Unconference from '../Unconference'
import VenueAndHotel from '../VenueAndHotel'
import Jobs from '../Jobs'
import CityGuide from '../CityGuide'
import DiversityAndSafety from '../DiversityAndSafety'
import FAQ from '../FAQ'
import './index.css'

const AboutSectionWrapper = ({ sectionId, subRouteId }) => {
  switch (sectionId) {
    default:
    case 'topic-tables':
      return <TopicTables />
    case 'ask-react-team':
      return <AskReactTeam />
    case 'unconference':
      return <Unconference />
    case 'venue-and-hotel':
      return <VenueAndHotel />
    case 'jobs':
      return <Jobs />
    case 'city-guide':
      return <CityGuide />
    case 'diversity-and-safety':
      return <DiversityAndSafety />
    case 'faq': {
      const defaultFAQSectionId = 'general'
      return <FAQ sectionId={subRouteId || defaultFAQSectionId } />
    }
  }
}

export default AboutSectionWrapper
