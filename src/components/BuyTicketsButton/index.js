import React from 'react'
import classNames from 'classnames'
import styles from './buyTicketsButton.module.css'

const BuyTicketsButton = ({ inverse, text = 'Buy Tickets' }) => (
  <div className={classNames({ [styles.inverse]: inverse })}>
    <a href="#buy-tickets" className={styles.btn}>
      {text}
    </a>
  </div>
)

export default BuyTicketsButton
