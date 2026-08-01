import React from 'react'
import '../styles/_aboutus.scss'



export default function aboutus({spoon1,video}) {
  return (
    <section className='Aboutus'> 

    <div className="Aboutus__container pt-20">
        <div className="Aboutus__script flex flex-col items-center px-75">
            <p className='Aboutus__subtext'>About us</p>
            <img src={spoon1} alt="" />
            <h2 className='Aboutus__title mb-8'>Happy Hours with Us</h2>
            <p className='Aboutus__text mb-20'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. 
                In sed odio nec aliquet eu proin mauris et.
            </p>
            <div className="Aboutus__video">
                <video className='Aboutus__vid' autoPlay muted loop playsInline >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>

    </section>
  )
}
