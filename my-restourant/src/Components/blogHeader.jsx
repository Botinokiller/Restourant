import React from 'react'
import '../styles/_blogHeader.scss'


export default function blogHeader() {
  return (
    <section className='header'>
        <div className='header__container'>

            <div className='header__script'>
                <h2 className='header__title'>Our Blogs</h2>
                <p className='header__title'>Home <span className='header__arrow'><img src={arrow} alt="" /></span> Open Blogs With Sidebar</p>
            </div>

        </div>
    </section>
  )
}
