import React, { useEffect, useState } from 'react'
import LineButton from '../../../../LineButton'
import SubPageSectionHeader from '../../../../SubPageSectionHeader'
import MapIcon from '../../../../../assets/icons/about/map-location-icon.svg'
import JOB_IMG_MAP from './image-map'
import { getJobCompanyId } from '../../../../../utils/job'
import { getScreenWidth } from '../../../../../utils/window'
import { NATIVE_BREAKPOINT } from '../../../../../constants'
import './index.css'

const JobLocation = ({ location, remote, isNativeView }) => (
  <div className='job-location-wrap'>
    <span className='job-location'>
      <img src={MapIcon} alt='map' /> &nbsp;
      {location}
    </span> &nbsp;&nbsp;
    {remote && !isNativeView && (
      <JobLocationRemote />
    )}
  </div>
)

const JobLocationRemote = () => (
  <span className='job-location-remote'>
    Remote Ok
  </span>
)

const Job = ({ company = '', title, description, location, remote = false, logo, link  }) => {
  const [isNativeView, setIsNativeView] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsNativeView(getScreenWidth() <= NATIVE_BREAKPOINT);
    }
  }, [])
  const flexSection = (
    <div>
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
  )
  return (
    <div>
      <div className='job-item-grid'>
        <div className='job-item-grid-left'>
          <div className='job-logo'>
            <img src={logo} alt={`${company}`} />
          </div>
        </div>
        <div className='job-item-grid-right'>
          {isNativeView && <JobLocationRemote />}
          <h2 className='job-company'>
            {company}
          </h2>
          <p className='job-title'>
            {title}
          </p>
          <JobLocation location={location} remote={remote} isNativeView={isNativeView} />
          {!isNativeView && (
            flexSection
          )}
        </div>
      </div>
      {isNativeView && (
        <div className='job-native-inline'>
          {flexSection}
        </div>
      )}
    </div>
  )
}

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

const JobSection = ({ noJobsTitle, jobs = [], noJobsSubtext }) => (
  <div className='section-jobs-section'>
    {(!jobs || jobs.length === 0) && (
      <SubPageSectionHeader
        text={noJobsTitle}
        className='section-jobs-section-title'
      />
    )}
    <JobGrid
      jobs={jobs.map(job => ({
        ...job,
        logo: JOB_IMG_MAP[getJobCompanyId(job.company)]
      }))}
      noJobsSubtext={noJobsSubtext}
    />
  </div>
)

export default JobSection
