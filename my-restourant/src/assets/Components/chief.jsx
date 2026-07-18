import React from 'react'
import '../styles/_chief.scss'
export default function chief({chiefs,spoon,dot}) {
  return (
    <section className='chief'>
        <div className='chief__container'>
            <div className='chief__overlay flex w-full gap-20 justify-center   py-25'>

                <div className='chief__img'>
                    <img src={chiefs} alt="" />
                </div>

                <div className='chief__block pt-20'>
                    <div className='chief__top mb-10'>
                        <div className='chief__background'></div>
                        <h1 className='chief__words'>Chef’s Word</h1>
                        <img src={spoon} alt="" />
                        <h2 className='chief__title'>What we believe in</h2>
                    </div>
                    <div className='chief__middle mb-15'>
                        <h2 className='chief__text flex items-end flex gap-2'><span className='chief__dots'><img src={dot} alt="" /></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</h2>
                        <p className='chief__subtext '>
                        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla <br /> scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. <br />Congue iaculis integer curabitur semper sit nunc.                        
                        </p>
                    </div>

                    <div className='chief__bottom'>
                        <div className='chief__desc'>
                            <h2 className='chief__name'>Kevin Luo</h2>
                            <p className='chief__position mb-15'>Chef & Founder</p>
                            <p className='chief__signature'>Kevin Luo</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}
