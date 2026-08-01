import React from 'react'
import '../styles/_aboutheader.scss'


export default function header({arrow}) {
  return (
    <section className='header_1'>
        <div className='header_1__container w-full h-full flex justify-center items-center pb-20'>
            <div className='header_1__script flex flex-col items-center'>
              <h2 className='header_1__title'>Our Blogs</h2>
              <p className='header_1__text flex gap-2 items-center'>Home <span className='header__arrow'><img src={arrow} alt="" /></span> Open Blogs With Sidebar</p>
          </div>
        </div>
    </section>
  )
}

