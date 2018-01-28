import React from 'react'

const EmailSignup = () => (
  <section style={{ marginTop: 35, marginBottom: 35 }}>
    <p
      style={{
        maxWidth: 580,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 13,
      }}
    >
      Stay up-to-date with our (non-spammy) newsletter.
    </p>
    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
      <form
        name="email-subscribe"
        data-netlify="true"
        style={{ marginBottom: 0 }}
      >
        <input
          type="text"
          placeholder="Email"
          name="email"
          style={{ width: 300 }}
        />
        <span className="hide-below-640"> </span>
        <button
          type="submit"
          style={{
            marginLeft: 10,
            background: '#000000',
            color: 'white',
            font: 'helvetica neue',
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
)

export default EmailSignup
