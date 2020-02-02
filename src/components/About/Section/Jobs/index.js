import React from 'react'
import HiringMixer from './hiring-mixer'
import JobSection from './Section'
import { hiringMixer, noJobsSubtext, jobs } from '../../../../assets/data/about/jobs.json'
import './index.css'

const Jobs = ({ header, jobs, hiringMixerText, noJobsSubtext }) => (
  <section id='jobs' className='jobs'>
    <HiringMixer title={hiringMixer.title} date={hiringMixer.date} time={hiringMixer.time} subtext={hiringMixer.subtext} />
    <JobSection jobs={jobs} noJobsSubtext={noJobsSubtext} />
  </section>
)

Jobs.defaultProps = {
  hiringMixer,
  jobs,
  noJobsSubtext
}

export default Jobs
