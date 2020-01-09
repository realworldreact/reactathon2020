import React, { Component } from 'react'
import styles from './highlights.module.css'

class Highlights extends Component {
  state = {
    loadedImages: {},
  }

  componentDidMount() {
    const imageLoadDelay = 3000
    function loadImages() {
      Array.from(new Array(4), (x, i) => i + 1).map(x => {
        const img = new Image()

        img.onload = () => {
          this.setState({
            loadedImages: { ...this.state.loadedImages, [x]: true },
          })
        }

        img.src = require(`./images/highlights-${x}.png`)
      })
    }

    setTimeout(loadImages.bind(this), imageLoadDelay)
  }

  render() {
    return (
      <section style={{ marginTop: 50, marginBottom: 50 }} className={styles.highlightSectionContainer}>
        <h1 className={styles.sectionHeader}>Highlights<font style={{color: '#36A7EE'}}>.</font></h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 50,
            marginBottom: 300,
          }}
          className={styles.imageContainer}
        >
          {Array.from(new Array(4), (x, i) => i + 1).map(x => (
            <div key={`highlight-${x}`} style={{ flexBasis: 300 }}>
              {this.state.loadedImages[x] ? (
                <img
                  src={require(`./images/highlights-${x}.png`)}
                  alt="highlight"
                  className="img-responsive"
                />
              ) : (
                <div style={{ width: 300, height: 201.953 }} />
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Highlights
