import React from 'react'
import 

export default function blogPage({arrow}) {
  return (
    <section className='blogPage'>
        <div className='blogPage__container'>

          <div className='blogPage__layover w-full pt-40'>

            <div className='blogPage__Script w-full flex items-center justify-center flex-col'>
              <h2 className='blogPage__Title'>Our Blogs</h2>
              <p className='blogPage__text flex gap-2 items-center'>Home <span className='blogPage__arrow'><img src={arrow} alt="" /></span> Our Blogs With Sidebar</p>
            </div>

          </div>

        </div>
    </section>
  )
}
