import React from 'react'
import Helmet from 'react-helmet'
import { TITLE, META } from './meta.js'
import FAV_ICON from './favicon.ico'

const Head = ({ title, meta, favIcon  }) => (
  <Helmet
    title={title}
    meta={meta}
    link={[{ rel: 'icon', href: favIcon }]}
  />
)

Head.defaultProps = {
  title: TITLE,
  meta: META,
  favIcon: FAV_ICON
}

export default Head
