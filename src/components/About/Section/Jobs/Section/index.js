import React from 'react'
import LineButton from '../../../../LineButton'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import './index.css'

const JobLocation = ({ location, remote }) => (
  <div className='job-location-wrap'>
    <span className='job-location'>
      <img src='' />
      {location}
    </span> &nbsp;
    {remote && (
      <span className='job-location-remote'>
        Remote Ok
      </span>
    )}
  </div>
)

const Job = ({ company = '', title, description, location, remote = false, logo, link  }) => (
  <div className='job-item-grid'>
    <div className='job-item-grid-left'>
      <div className='job-logo'>
        <img src={logo} alt={`${company}`} />
      </div>
    </div>
    <div className='job-item-grid-right'>
      <h2 className='job-company'>
        {company}
      </h2>
      <p className='job-title'>
        {title}
      </p>
      <JobLocation location={location} remote={remote} />
      <p className='job-description'>
        {description}
      </p>
      <LineButton
        className='job-cta'
        href={link}
        text='See Full Job Description'
        isExternalLink={true}
      />
    </div>
  </div>
)

const JobGrid = ({ jobs, noJobsSubtext }) => (
  <div className='jobs-grid-wrap'>
    {jobs.length > 0
    ? (
      <div className='jobs-grid'>
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

const JobSection = ({ title, jobs = [], noJobsSubtext }) => (
  <div className='section-jobs-section'>
    <SubPageSectionHeader
      text={title}
      className='section-jobs-section-title'
    />
    <JobGrid jobs={jobs} noJobsSubtext={noJobsSubtext} />
  </div>
)

export default JobSection
