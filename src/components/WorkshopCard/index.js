import React from 'react'
import styles from './workshopCard.module.css'

function formatDate(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return day + ' ' + monthNames[monthIndex] + ' ' + year
}

const WorkshopCard = ({
  title,
  skillLevel,
  photo,
  instructor,
  position,
  company,
  prerequisites,
  descriptions,
  time,
  length,
}) => (
  <div style={{ border: '1px solid black' }}>
    <header
      style={{
        background: '#484848',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 30px',
        textAlign: 'left',
      }}
    >
      <h1 style={{ color: 'white', width: '75%' }}>{title}</h1>
      <p style={{ fontSize: 14, color: 'white', letterSpacing: '.78px' }}>
        {skillLevel.toUpperCase()}
      </p>
    </header>
    <main className={styles.main}>
      <div style={{ minWidth: 250 }}>
        <img
          src={require(`../../components/Speakers/images/${photo}@3x.png`)}
          alt="speaker photo"
          style={{ width: 100 }}
        />
        <h2>{instructor}</h2>
        <p style={{ fontSize: 14 }}>{position}</p>
        <p style={{ fontSize: 12 }}>{company}</p>
        <div style={{ marginBottom: 30 }}>
          <p
            style={{
              fontSize: 14,
              color: 'black',
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Prerequisites:
          </p>
          {prerequisites.map((prereq, i) => (
            <p key={`prereq-${i}`} style={{ fontSize: 12 }}>
              {prereq}
            </p>
          ))}
        </div>
      </div>
      <div>
        {descriptions.map(({ description, bullets = [] }, i) => (
          <div key={`description-${i}`} style={{ marginBottom: 15 }}>
            <p style={{ fontSize: 14, color: '#2f2f2f', marginBottom: 15 }}>
              {description}
            </p>
            {bullets.map((bullet, j) => (
              <p
                key={`description-${i}-bullet=${j}`}
                style={{ fontSize: 14, color: '#2f2f2f' }}
              >
                {bullet}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#E8E8E8',
        padding: '15px 30px',
      }}
    >
      <p style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>
        {formatDate(new Date(time))}
      </p>
      <p style={{ fontSize: 14, color: 'black' }}>{length}</p>
    </footer>
  </div>
)

export default WorkshopCard
