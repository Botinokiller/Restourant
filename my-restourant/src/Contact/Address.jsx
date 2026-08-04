import React from 'react'
import '../styles/_address.scss'


export default function Address() {
  return (
    <>
    <div className="map">
      <div className="map__frame px-30 py-30">
        <div className="map__border"></div>
        <div className="map__container">
          <iframe
            className="map__embed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13374.05338108682!2d63.543623474846996!3d42.15236335160516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41e2f2420889e1f7%3A0xdc9bb38a22d2a3ba!2sUchkuduk%2C%20Navoiy%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1785184710069!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
    </>
  
  )
}
