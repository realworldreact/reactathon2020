import React from 'react'
import classNames from 'classnames'
import styles from './buyTicketsButton.module.css'

const BuyTicketsButton = ({ inverse }) => (
  <div className={classNames({ [styles.inverse]: inverse })}>
    <a href="#buy-tickets" className={styles.btn}>
      Buy Tickets
    </a>
  </div>
)

export default BuyTicketsButton
