import React from 'react'
import styles from './index.module.css'
import githubLogo from './github@2x.png'
import microsoftLogo from './microsoft@2x.png'

const Sponsors = () => (
  <section style={{ marginTop: 50, marginBottom: 100 }}>
    <h1 style={{ marginBottom: 100 }}>Sponsors</h1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <img src={githubLogo} alt="GitHub logo" className={styles['sponsor-logo']} />
      <img src={microsoftLogo} alt="Microsoft logo" className={styles['sponsor-logo']} />
    </div>
  </section>
)

export default Sponsors
