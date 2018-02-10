import React from 'react'
import styles from './registerNow.module.css'
import BuyTicketsButton from '../BuyTicketsButton'

const RegisterNow = ({ title, descriptionParagraphs, callToAction }) => (
  <div className={styles['register-now-component']}>
    <h1 style={{ marginBottom: 15 }}>{title}</h1>
    <main>
      <div className={styles.description}>
        {descriptionParagraphs.map((paragraph, i) => (
          <p
            key={`paragraph-${i}`}
            style={{
              marginBottom: i + 1 === descriptionParagraphs.length ? 0 : 15,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles['register-now-button']}>
        <div style={{ marginBottom: 15 }}>
          <BuyTicketsButton text="Register Now" inverse />
        </div>
        <p>{callToAction}</p>
      </div>
    </main>
  </div>
)

export default RegisterNow
