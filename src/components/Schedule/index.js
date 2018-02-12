import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './schedule.module.css'

class Schedule extends Component {
  state = {
    expandedRowNum: -1,
  }

  renderExpandedContent(talkDescription, imgSlug, speakerBio) {
    return (
      <div>
        <p style={{ fontSize: 14, color: '#585858', marginBottom: 30 }}>
          {talkDescription}
        </p>
        <p style={{ fontSize: 14, color: '#585858' }}>{speakerBio}</p>
      </div>
    )
  }

  handleRowClick(isExpandable, rowNum) {
    if (isExpandable) {
      this.setState({ expandedRowNum: rowNum })
    }
  }

  render() {
    const { date, schedule } = this.props

    return (
      <section
        className={styles.container}
        style={{ marginTop: 50, marginBottom: 50 }}
      >
        <h2 style={{ marginBottom: 20 }}>SCHEDULE - {date}</h2>
        <p className={styles['mobile-callout']}>Tap a row for details</p>
        <table style={{ marginLeft: -10, marginRight: -10 }}>
          <tbody>
            {schedule.map((timeslot, i) => {
              const isExpanded = this.state.expandedRowNum === i
              const {
                time,
                speaker,
                talkTitle,
                talkDescription,
                photo,
                speakerBio,
                tableRowExpands,
              } = timeslot

              return (
                <tr
                  key={`row-${i}`}
                  className={classNames({
                    [styles.expandable]: tableRowExpands,
                  })}
                  onClick={() => this.handleRowClick(tableRowExpands, i)}
                >
                  <td
                    style={{
                      maxWidth: 130,
                      padding: 20,
                      verticalAlign: 'top',
                      position: 'relative',
                    }}
                  >
                    <p>{time}</p>
                    {isExpanded &&
                      photo !== null && (
                        <div style={{ position: 'absolute', bottom: 10 }}>
                          <img
                            src={require(`../Speakers/images/${photo}@3x.png`)}
                            alt="speaker photo"
                          />
                        </div>
                      )}
                  </td>
                  <td>
                    <p style={{ fontSize: 16, color: '#29B1E4' }}>{speaker}</p>
                    <p
                      style={{
                        fontSize: 16,
                        color: '#363636',
                        marginBottom: 10,
                      }}
                    >
                      {talkTitle}
                    </p>
                    {isExpanded &&
                      this.renderExpandedContent(
                        talkDescription,
                        photo,
                        speakerBio
                      )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    )
  }
}

export default Schedule
