import React from 'react'
import '../styles/_blogHeader.scss'


export default function blogHeader({arrow}) {
  return (
    <section className='blogHeader'>
        <div className='blogHeader__container w-full h-full flex justify-center items-center pb-20'>

            <div className='blogHeader__script flex flex-col items-center'>
                <h2 className='blogHeader__title'>Our Blogs</h2>
                <p className='blogHeader__text flex gap-2 items-center'>Home <span className='blogHeader__arrow'><img src={arrow} alt="" /></span> Open Blogs With Sidebar</p>
            </div>

        </div>
    </section>
  )
}
