import React from 'react'

const Highlights = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1>Highlights</h1>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 50,
      }}
    >
      {Array.from(new Array(24), (x, i) => i + 1).map((_, i) => (
        <div style={{ flexBasis: 300 }}>
          <img
            src={require(`./images/highlights-${i + 1}@2x.png`)}
            alt="highlight image"
            className="img-responsive"
          />
        </div>
      ))}
    </div>
  </section>
)

Highlights.propTypes = {}

export default Highlights
