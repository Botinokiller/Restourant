import React from 'react'
import '../styles/_message.scss';


export default function awards({food,G}) {
  return (
    <section className='message'>
        <div className='message__container'>
            <div className='message__overlay flex items-center justify-center gap-20 px-20 py-30'>
                
                <div className="message__form flex flex-col gap-5 px-8 py-10 w-[50%]">
                    <div className="message__field w-full">
                        <input className="message__input w-full px-5 py-4" type="text" placeholder="Full Name"/>
                    </div>

                    <div className="message__field w-full">
                        <input className="message__input w-full px-5 py-4" type="email" placeholder="Email Address"/>
                    </div>

                    <div className="message__field w-full">
                        <textarea className="message__textarea w-full px-5 py-4" placeholder="Message" rows={6}/>
                    </div>

                    <div className="message__action">
                        <button className="message__btn px-8 py-3" type="submit">
                        Subscribe
                        </button>
                    </div>
                </div>

                <div className='message__right relative'>
                    <div className='message__img'>
                        <img src={food} alt="" />
                    </div>
                    <img src={G} alt="" className='absolute bottom-0 right-30' />
                </div>

            </div>
        </div>
    </section>
  )
}
