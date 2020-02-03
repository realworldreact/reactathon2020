import React from 'react'
import HiringMixer from './hiring-mixer'
import JobSection from './Section'
import { hiringMixer, jobListings } from '../../../../assets/data/about/jobs.json'
import './index.css'

const Jobs = ({ header, jobListings }) => (
  <section id='jobs' className='jobs'>
    <HiringMixer contactInfo={hiringMixer.contactInfo} buttonHref={hiringMixer.buttonHref} buttonText={hiringMixer.buttonText} title={hiringMixer.title} date={hiringMixer.date} time={hiringMixer.time} subtext={hiringMixer.subtext} />
    <JobSection jobs={jobListings.jobs} noJobsSubtext={jobListings.noJobsSubtext} title={jobListings.title} />
  </section>
)

Jobs.defaultProps = {
  hiringMixer,
  jobListings
}

export default Jobs
