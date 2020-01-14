import React from 'react'
import SectionTitle from '../SectionTitle'
import SpeakerGrid from './Grid'
import './index.css'

const SpeakerSection = () => (
  <section className='speakers-section'>
    <SectionTitle text='Speakers' className='title-speakers' />
    <SpeakerGrid />
  </section>
)

export default SpeakerSection
