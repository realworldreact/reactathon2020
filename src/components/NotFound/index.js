import React, { useState, useEffect } from 'react'
import Divider from '../Divider'
import LoadingIndicator from '../LoadingIndicator'
import './index.css'

const LOADER_TIMEOUT = 3000 // milliseconds

const NotFound = () => {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, LOADER_TIMEOUT);
    return () => clearTimeout(loadingTimer);
  }, [])
  return (
    !isLoading
    ? (
      <div>
        <section className='section-content section-404'>
          <h2 className='section-404-header'>
            404: This page cannot be found.
          </h2>
          <p className='section-404-subtext'>
            Perhaps we can help you out. &nbsp;
            <a href="mailto:ben@realworldreact.com">
              Drop us a line
            </a>.
          </p>
        </section>
        <div className='section-404-bottom'>
          <Divider />
        </div>
      </div>
    )
    : <LoadingIndicator />
  )
}

export default NotFound
