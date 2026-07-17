// import React from 'react'
import '../styles/_header.scss'

import React from 'react'

export default function header({spoon,header}) {
  return (
    <section className='header w-full'>

      <div className='header__container flex items-center gap-5 mb-10'>

        <div className='header__sidetext pl-5'>
          <span className='header__sidetext-1'>#Bar</span>
          <span className='header__sidetext-1'>#Gericht</span>
        </div>

        <div className='header__container-1 mt-10 flex  mx-auto gap-30'>
          <div className='header__block  flex flex-col justify-center '>
            <div className='header__header1'>
              <h2 className='header__toptext mb-2'>Chase the new Flavour</h2>
              <span className='header__spoon mb-2'><img src={spoon} className='header__img' alt="" /></span>
            </div>
            <div className='header__script flex'>
              <div className='header__paragraph flex flex-col'>
                <h2 className='header__title mb-7'>The key to <br />Fine dining</h2>
                <p className='header__text mb-7'>
                  Sit tellus lobortis sed senectus vivamus molestie. <br />
                  Condimentum volutpat morbi facilisis quam scelerisque <br /> sapien. 
                  Et, penatibus aliquam amet tellus
                </p>
                <div className='header__button'>
                <button className='header__btn px-5 py-2'>Explore Menu</button>
                </div>
              </div>
            </div>
          </div>
          <div className="header__img">
            <div className="header__frame"></div>
            <img src={header} alt="dish" className="header-image w-full" />
          </div>
        </div>

      </div>

      <div className='header__nav w-full flex justify-center '>
        <button className='header-slider active'>01</button>
        <button className='header-slider'>02</button>
        <button className='header-slider'>03</button>
        <button className='header-slider'>04</button>
      </div>

    </section>
  )
}
