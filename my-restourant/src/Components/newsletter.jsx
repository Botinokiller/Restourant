import React from 'react'
import '../styles/_news.scss'



export default function Book({spoon}) {
  return (
    <section className='news'>

        <div className='news__container'>
            <div className='news__script w-full flex flex-col items-center mb-15'>
                <p className="news__script mb-2">Newsletter</p>
                <img src={spoon} className='news__img mb-2' alt="" />
                <h2 className="news__title mb-6">Subscribe to Our Newsletter</h2>
                <p className="news__subtext">And never miss latest Updates!</p>
            </div>

            <div className='news__blocks w-full'>

                <form className="book__form flex  justify-center">
                    <input className="book__input" type="email" placeholder="Email Address"/>

                    <button className="book__button" type="submit">Subscribe</button>
                </form>
                 
            </div>

        </div>

    </section>

  )
}
