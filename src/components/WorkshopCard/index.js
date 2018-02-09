import React from 'react'

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

const WorkshopCard = ({ title, skillLevel, time, length }) => (
  <div style={{ border: '1px solid black' }}>
    <header
      style={{
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 30px',
        textAlign: 'left',
      }}
    >
      <h1 style={{ color: 'white', width: '75%' }}>{title}</h1>
      <p style={{ fontSize: 14, color: '#91c1f0', letterSpacing: '.78px' }}>
        {skillLevel.toUpperCase()}
      </p>
    </header>
    <main style={{ display: 'flex', padding: 30, background: '#f6f9fc' }}>
      <div />
      <div />
    </main>
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#ebf3fc',
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
