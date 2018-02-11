import React from 'react'
import Fade from 'react-reveal/Fade'
import classNames from 'classnames'
import styles from './buyTicketsButton.module.css'
import { Link } from 'react-scroll'
import { BUY_TICKETS_ID } from '../../constants'

const BuyTicketsButton = ({
  inverse,
  text = 'Buy Tickets',
  fadeIn = false,
}) => {
  const children = (
    <div className={classNames({ [styles.inverse]: inverse })}>
      <Link className={styles.btn} to={BUY_TICKETS_ID} smooth>
        {text}
      </Link>
    </div>
  )

  return fadeIn ? <Fade delay={2000}>{children}</Fade> : children
}

export default BuyTicketsButton
