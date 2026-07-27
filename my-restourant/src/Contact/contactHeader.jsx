import React from 'react'



export default function contactHeader({arrow}) {
  return (
    <section className='contact-header'>

      <div className="contact-header__container">
          <div className="contact-header__script">
            <h2 className='contact-header-title'>Contact Us</h2>
            <p className='contact-header-text'>Home <span className='contact-header-span'><img src={arrow} alt="" /></span> Contact Us</p>
          </div>
      </div>
        
    </section>
  )
}
