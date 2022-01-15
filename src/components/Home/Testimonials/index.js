import React from 'react'
import SectionTitle from '../SectionTitle'
import Item from './Item'
import './index.css'

import imgJayPhelps from '../../../assets/images/home/testimonial/jay-phelps.jpg'
import imgWesBos from '../../../assets/images/home/testimonial/wes-bos.jpg'
import imgMattBiilmann from '../../../assets/images/home/testimonial/matt-biilmann.jpg'
import imgJennCreighton from '../../../assets/images/home/testimonial/jenn-creighton.jpg'
import imgLeeByron from '../../../assets/images/home/testimonial/lee-byron.jpg'
import imgScottTolinski from '../../../assets/images/home/testimonial/scott-tolinski.jpg'

const Testimonials = ({ testimonials }) => {
  return (
    <section className='section-testimonials'>
      <SectionTitle text='Testimonials' className='title-testimonials' />
      <div className="testimonials-list">
        {testimonials.map((testimonial, i) => <Item key={i} {...testimonial} />)}
      </div>
    </section>
  )
}

Testimonials.defaultProps = {
  testimonials: [
    {
      text: '“Phenomenal. It’s one of my favorite React conferences.”',
      imgSrc: imgJayPhelps,
      name: 'Jay Phelps',
      role: 'Web Platform Engineer, Netflix'
    }, {
      text: '“This crowd really knew their stuff -- and you can sense that just in the conversations you have with people.”',
      imgSrc: imgWesBos,
      name: 'Wes Bos',
      role: 'Engineer & Entrepreneur, WesBos.com & Syntax.fm'
    }, {
      text: '“Reactathon is a very community-driven conference. You feel a very good energy on the floor and amongst people. There’s always lots of interesting interactions and conversations to be had. And it’s a very friendly atmosphere and inviting community.”',
      imgSrc: imgMattBiilmann,
      name: 'Mathias Biilmann',
      role: 'Co-founder & CEO, Netlify'
    }, {
      text: '“This conference is way more focused on the people who are attending, and the speakers. It just seems like the focus is on what’s going to make attendees feel really good while we’re here and be really happy.”',
      imgSrc: imgJennCreighton,
      name: 'Jenn Creighton',
      role: 'Senior Engineer, Netflix'
    }, {
      text: '“The topic tables are interesting because it’s an opportunity to talk to people who are speakers, experts & contributors, or just people that are working at companies and are at various levels of adopting these things. And every conversation is super interesting -- I learn something in every conversation, I’m sure everybody feels the same -- that you can only get by being here.”',
      imgSrc: imgLeeByron,
      name: 'Lee Byron',
      role: 'Web Engineering Lead, Robinhood'
    }, {
      text: '“Amazing. The venue, the food, the people. Every single person that we’ve met has been interesting…We’re hearing about all sorts of interesting problems and challenges that people face in their companies…It’s been really amazing to talk to people and see what they’re working on and just understand what their life in working in code is like. ”',
      imgSrc: imgScottTolinski,
      name: 'Scott Tolinski',
      role: 'Engineer & Entrepreneur, Levl Up Tutorials & Syntax.fm'
    }
  ]
}

export default Testimonials
