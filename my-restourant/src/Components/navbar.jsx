import React from 'react'
import '../styles/_navbar.scss'

export default function navbar({line}) {
  return (
    <navbar className='navbar'>
      <div className='navbar__container flex items-center justify-between px-12 py-6'>
        <div>
          <h1 className='navbar__logo'>Gerícht</h1>
        </div>
        <div className='navbar__nav'>
          <ul className='navbar__list flex gap-8'>
            <li className='navbar__link'><a href="" className='navbar__item'>Home</a></li>
            <li className='navbar__link'><a href="" className='navbar__item'>Pages</a></li>
            <li className='navbar__link'><a href="" className='navbar__item'>Contact Us</a></li>
            <li className='navbar__link'><a href="" className='navbar__item'>Blog</a></li>
            <li className='navbar__link'><a href="" className='navbar__item'>Landing</a></li>
          </ul>
        </div>
        
        <div className='navbar__contacts flex items-center gap-7'>
          <a href="" className='navbar__login'>Log in/Registration</a>
          <div className='navbar__divider'><img src={line} alt=""/></div>
          <a href="" className='navbar__book'>Book Table</a>
        </div>

      </div>
    </navbar>
  )
}
