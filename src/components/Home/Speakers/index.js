import React from 'react'
import SectionTitle from '../SectionTitle'
import SpeakerGrid from '../../Speakers/Grid'
import './index.css'

const SpeakerSection = () => (
  <section className='section-speakers'>
    <SectionTitle text='Speakers' className='title-speakers' />
    <SpeakerGrid />
  </section>
)

export default SpeakerSection
