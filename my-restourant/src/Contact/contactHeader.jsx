import React from 'react'
import '../styles/_contactHeader.scss'


export default function contactHeader({arrow}) {
  return (
    <section className='contact-header'>

      <div className="contact-header__container">
          <div className="contact-header__script">
            <h2 className='contact-header-title'>Contact Us</h2>
            <p className='contact-header-text'>Home <span className='contact-header-span'><img src={arrow} alt="arrow"/></span> Contact Us</p>
          </div>
      </div>
        
    </section>
  )
}
