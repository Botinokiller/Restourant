import React from 'react'
import '../styles/_contactHeader.scss'


export default function contactHeader({arrow}) {
  return (
    <section className='contact-header'>

      <div className="contact-header__container flex justify-center items-center">
          <div className="contact-header__script flex flex-col items-center">
            <h2 className='contact-header-title'>Contact Us</h2>
            <p className='contact-header-text flex items-center gap-2'>Home <span className='contact-header-span'><img src={arrow} alt="arrow"/></span> Contact Us</p>
          </div>
      </div>
        
    </section>
  )
}
