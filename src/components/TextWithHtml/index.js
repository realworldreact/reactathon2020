import React from 'react'
import Link from '../Link'
import './index.css'

const TextWithHtml = ({ className = '', linkClassName = '', text = '', placeholder, replaceLink, replaceText, isExternal = true }) => (
  <div className={className}>
    {
      text.indexOf(placeholder) === -1
      ? text
      : (
        <div>
          <span>
            {text.substring(0, text.indexOf(placeholder))}
          </span>
          &nbsp;
          <Link
            className={`link ${linkClassName}`}
            href={replaceLink}
            text={replaceText}
            isExternal={isExternal}
          />
          &nbsp;
          <span>
            {text.substring(text.lastIndexOf(placeholder) + placeholder.length + 1)}
          </span>
        </div>
      )
    }
  </div>
)

export default TextWithHtml
