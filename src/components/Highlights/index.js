import React from 'react'
import LazyLoad from 'react-lazyload'

const Highlights = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1>2017 Highlights</h1>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 50,
      }}
    >
      {Array.from(new Array(24), (x, i) => i + 1).map((_, i) => (
        <LazyLoad
          key={`highlightImage${i}`}
          offset={3400}
          placeholder={<div style={{ width: 300, height: 201.953 }} />}
          once
        >
          <div style={{ flexBasis: 300 }}>
            <img
              src={require(`./images/highlights-${i + 1}@2x.png`)}
              alt="highlight image"
              className="img-responsive"
            />
          </div>
        </LazyLoad>
      ))}
    </div>
  </section>
)

Highlights.propTypes = {}

export default Highlights
