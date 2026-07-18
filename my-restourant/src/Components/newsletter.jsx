import React from 'react'
import ''



export default function Book({spoon}) {
  return (
    <section className='news'>

        <div className='news__container py-15'>
            <div className='news__script w-full flex flex-col items-center mb-15'>
                <p className="news__script mb-2">Newsletter</p>
                <img src={spoon} className='news__img mb-2' alt="" />
                <h2 className="news__title mb-6">Subscribe to Our Newsletter</h2>
                <p className="news__subtext">And never miss latest Updates!</p>
            </div>

        <div className="news__blocks w-full flex justify-center px-40">
            <form className="news__form w-full flex flex-col gap-6 md:flex-row md:items-center">
                <div className="news__field  flex-1">
                    <input type="email" className="news__input w-full pl-2 py-3" placeholder="Email Address"/>
                </div>
                <button type="submit" className="news__button shrink-0">Subscribe</button>
            </form>
        </div>

        </div>

    </section>

  )
}
