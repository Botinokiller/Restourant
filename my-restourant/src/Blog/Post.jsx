import React from 'react'
import '../styles/_post.scss'


export default function PostComment({logo}) {
  return (
    <section className='post-comment '>
        <div className='post-comment__container relative pl-30 pr-150 pb-20 pt-10'>
            
            <h2 className='post-comment__title mb-10'>Post A Comment</h2>

            <form className='post-comment__form flex flex-col gap-6'>

                <textarea
                className='post-comment__textarea w-full min-h-40 p-4'
                placeholder='Hello There, My Message...'
                />

                <div className='post-comment__row flex flex-col sm:flex-row gap-7'>
                <input
                    type='text'
                    className='post-comment__input flex-1 min-w-0 py-3'
                    placeholder='First Name'
                />
                <input
                    type='text'
                    className='post-comment__input flex-1 min-w-0 px-4 py-3'
                    placeholder='Last Name'
                />
                </div>

                <label className='post-comment__checkbox-label flex items-center gap-3 cursor-pointer'>
                <input
                    type='checkbox'
                    className='post-comment__checkbox'
                    defaultChecked
                />
                <span className='post-comment__checkbox-text'>
                    Save my name and email in this browser for the next time I comment.
                </span>
                </label>

                <div className='post-comment__btn'>
                    <button type='submit' className='post-comment__submit'>Submit</button>
                </div>



            </form>

            <img src={logo} alt="" className='post-comment absolute  lg:block right-30 bottom-50' />

        </div>

    </section>
  )
}
