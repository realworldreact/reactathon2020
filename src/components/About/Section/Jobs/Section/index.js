import React from 'react'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import './index.css'

const Job = ({ company = '', jobTitle, jobDescription }) => (
  company
)

const JobSection = ({ title, jobs = [], noJobsSubtext }) => (
  <div className='section-jobs-section'>
    <SubPageSectionHeader
      text={title}
      className='section-jobs-section-title'
    />
    {jobs.length > 0
    ? (
      <div className='section-jobs-section-job-list'>
        {jobs.map((job, idx) => (
          <Job key={idx} {...job} />
        ))}
      </div>
    )
    : (
      <div className='section-jobs-section-nojob-subtext'>
        <p>{noJobsSubtext}</p>
      </div>
    )
    }
  </div>
)

export default JobSection
