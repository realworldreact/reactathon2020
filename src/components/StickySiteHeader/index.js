import React from 'react'
import TextWithHtml from '../TextWithHtml'
import './index.css'

const SiteNotice = () => (
  <TextWithHtml
    className='sticky-site-header-content'
    linkClassName='sticky-site-header-content-link'
    text={'Reactathon is back! In-person, fully-outdoors, fully-vaxxed, fully-tested.'}
    placeholder={'#speakers-section'}
    replaceText={'Learn more!.'}
    replaceLink={'/#speakers-section'}
    isExternal={false}
  />
)

const StickySiteHeader = () => (
  <div className='sticky-site-header'>
    <SiteNotice />
  </div>
)

export default StickySiteHeader
