import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Reactathon"
      meta={[
        { name: 'description', content: 'Reactathon 2018' },
        {
          name: 'keywords',
          content:
            'react, reactjs, react.js, react conf, workshop, netlify, lyft, github, opentable, eventebrite, webpack, redux, learn to code, learn to program, learn react, san francisco, reactathon, learn programming, learn javascript, learn coding, code, coding, programming, software engineer, software developer, web development, development, engineering, coding bootcamp, javascript, open source',
        },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 650,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
