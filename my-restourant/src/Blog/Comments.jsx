import React from 'react'
import '../styles/_comments.scss'


export default function Comments({ avatar1, avatar2, avatar3 }) {
  return (
    <div className='comments px-40'>
      <h2 className='comments__title mb-4'>Comment(3)</h2>

      <div className='comments__list flex flex-col p-4 gap-6'>

        <div className='comments__item flex gap-4'>
          <div className='comments__avatar aspect-square w-16 sm:w-20 shrink-0'>
            <img src={avatar1} alt='Nora Martin' className='comments__avatar-img w-full h-full object-cover rounded-md' />
          </div>
          <div className='comments__body flex-1 min-w-0'>
            <div className='comments__header flex items-start justify-between gap-4'>
              <h3 className='comments__name'>Nora Martin</h3>
              <button className='comments__reply-btn text-sm opacity-70 hover:opacity-100'>Reply</button>
            </div>
            <span className='comments__date mb-2'>01 Dec 2020</span>
            <p className='comments__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi
              tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit
              tincidunt nulla non tincidunt.
            </p>
          </div>
        </div>

        <div className='comments__item comments__item--reply flex gap-4 ml-8 sm:ml-16'>
          <div className='comments__avatar aspect-square w-16 sm:w-20 shrink-0'>
            <img src={avatar2} alt='Lara Williams' className='comments__avatar-img w-full h-full object-cover rounded-md' />
          </div>
          <div className='comments__body flex-1 min-w-0'>
            <div className='comments__header flex items-start justify-between gap-4'>
              <h3 className='comments__name'>Lara Williams</h3>
              <button className='comments__reply-btn text-sm opacity-70 hover:opacity-100'>Reply</button>
            </div>
            <span className='comments__date block text-sm opacity-60 mb-2'>05 Dec 2020</span>
            <p className='comments__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu
              morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit
              et tellus sit tincidunt nulla non tincidunt.
            </p>
          </div>
        </div>

      </div>

      <div className='comments__item comments__item--active flex gap-4   p-4  mt-6'>
        <div className='comments__avatar aspect-square w-16 sm:w-20 shrink-0'>
          <img src={avatar3} alt='Jane Cooper' className='comments__avatar-img w-full object-cover rounded-md' />
        </div>
        <div className='comments__body flex-1 min-w-0'>
          <div className='comments__header flex items-start justify-between gap-4'>
            <h3 className='comments__name comments__name--active text-yellow-400'>Jane Cooper</h3>
            <button className='comments__reply-btn text-sm opacity-70 hover:opacity-100'>Reply</button>
          </div>
          <span className='comments__date block text-sm opacity-60 mb-2'>05 Dec 2020</span>
          <p className='comments__text mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi
            tincidunt erat egestas quisque ultrices ut.
          </p>

          <div className='comments__form'>
            <div className='comments__form-meta flex items-center gap-4 mb-3'>
              <span className='comments__reply-to font-semibold'>Reply to Nora Martin</span>
              <button className='comments__cancel-reply text-sm opacity-70 hover:opacity-100'>Cancel Reply</button>
            </div>
            <textarea
              className='comments__textarea w-full min-h-32 bg-transparent border p-3 mb-4'
              placeholder='Hi There! I Love Your Blog....'
            />
            <button className='comments__submit '>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}