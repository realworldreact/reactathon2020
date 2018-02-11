import React from 'react'
import classNames from 'classnames'
import styles from './buyTicketsButton.module.css'
import { Link } from 'react-scroll'
import { BUY_TICKETS_ID } from '../../constants'

const BuyTicketsButton = ({ inverse, text = 'Buy Tickets' }) => (
  <div className={classNames({ [styles.inverse]: inverse })}>
    <Link className={styles.btn} to={BUY_TICKETS_ID} smooth>
      {text}
    </Link>
  </div>
)

export default BuyTicketsButton
