import React from 'react'
import '../styles/_menu.scss'

export default function menu() {
  return (
    <section className='menu '>
        <div className='menu__container mb-'>
            <div className='menu__container-1 w-full pl-20 pt-40 pb-50'>
                <div className='menu__btns flex flex-col gap-9'>
                    <a href='' className='menu__btn'>Bar Menu</a>
                    <a href='' className='menu__btn'>Food Menu</a>
                    <a href='' className='menu__btn'>Desserts Menu</a>
                </div>
            </div>
        </div>
    </section>
  )
}
