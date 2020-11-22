import React from 'react'
import TextWithHtml from '../TextWithHtml'
import './index.css'

const SiteNotice = () => (
  <TextWithHtml
    className='sticky-site-header-content'
    linkClassName='sticky-site-header-content-link'
    text={'Reactathon is back! We\'re meeting online for a safe & interactive experience!'}
    placeholder={'#COVID-19-LINK#'}
    replaceText={'Learn more here.'}
    replaceLink={'/about/faq/covid19'}
    isExternal={false}
  />
)

const StickySiteHeader = () => (
  <div className='sticky-site-header'>
    <SiteNotice />
  </div>
)

export default StickySiteHeader
