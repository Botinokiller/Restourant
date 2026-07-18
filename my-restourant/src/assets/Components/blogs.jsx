import React from 'react'
import '../styles/_blogs.scss';


export default function blogs({spoon,img1,img2,img3}) {
  return (
    <section className='blogs'>
        <div className='blogs__container pb-20'>

            <div className='blogs__script w-full flex flex-col items-center pt-20 mb-15'>
                <p className='blogs__subtitle'>Blogs</p>
                <img src={spoon} alt="" />
                <h2 className='blogs__title'>Gerícht updates</h2>
            </div>

            <div className='blogs__blocks flex px-40 gap-8 mb-15'>
                <div className='blogs__block w-full'>
                    <div className='blogs__top'>
                        <img src={img1} alt=""  className='blogs__block-img'/>
                        <p className='blogs__top-date'>
                            16 Apr 2021 <span className='blogs__top-span'>-Annalisa L</span>
                        </p>
                    </div>
                    <div className='blogs__bottom'>
                        <h2 className='blogs__bottom-title'>tips for prepping and caring for your grill</h2>
                        <p className='blogs__bottom-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
                        </p>
                        <a href="" className='blogs__link'>Read More</a>
                    </div>
                </div>
                <div className='blogs__block w-full'>
                    <div className='blogs__top'>
                        <img src={img2} alt="" className='blogs__block-img' />
                        <p className='blogs__top-date'>
                            23 May 2021 <span className='blogs__top-span'>-John Michael</span>
                        </p>
                    </div>
                    <div className='blogs__bottom'>
                        <h2 className='blogs__bottom-title'>summer cocktails and mocktails</h2>
                        <p className='blogs__bottom-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
                        </p>
                        <a href="" className='blogs__link'>Read More</a>
                    </div>
                </div>
                <div className='blogs__block w-full'>
                    <div className='blogs__top'>
                        <img src={img3} alt="" className='blogs__block-img' />
                        <p className='blogs__top-date '>
                            06 Aug 2021 <span className='blogs__top-span'>-Fred W</span>
                        </p>
                    </div>
                    <div className='blogs__bottom'>
                        <h2 className='blogs__bottom-title'>easy cooking for college students</h2>
                        <p className='blogs__bottom-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.                        
                        </p>
                        <a href="" className='blogs__link'>Read More</a>
                    </div>
                </div>
            </div>
            <div className='blogs__button w-full flex justify-center'>
                <button className='blogs__btn '>View More</button>
            </div>



        </div>

    </section>
  )
}
