import React from 'react'
import '../styles/_testimony.scss';


export default function testimony({spoon,img1,img2,img3,img4,dot}) {
  return (
    <section className='testimony'>
        <div className='testimony__container pt-4 pb-40'>

            <div className='testimony__script flex  flex-col items-center w-full mb-15'>
                <h2 className='testimony__subtitle'>Testimony</h2>
                <img src={spoon} alt="" />
                <p className='testimony__title'>Happy customers</p>
            </div>

            <div className='testimony__grids grid grid-cols-2 px-25 gap-10'>

                <div className='testimony__grid flex items-center gap-4 relative'>
                    <img src={img1} alt="" className='' /><span className='testimony__dots absolute left-35 top-38'><img src={dot} alt="" /></span>
                    <div className='desc'>
                        <p className='testimony__text mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </p>
                        <h2 className='testimony__names'>Wade Warren</h2>
                        <p className='testimony__position'>Sommelier</p>
                    </div>
                </div>
                <div className='testimony__grid flex items-center gap-4 relative'>
                    <img src={img2} alt="" /><span className='testimony__dots absolute absolute left-35 top-38'><img src={dot} alt="" /></span>
                    <div className='desc'>
                        <p className='testimony__text mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </p>
                        <h2 className='testimony__names'>Jane Cooper</h2>
                        <p className='testimony__position'>Chef</p>
                    </div>
                </div>
                <div className='testimony__grid flex items-center gap-4 relative'>
                    <img src={img3} alt=""  /><span className='testimony__dots absolute left-35 top-38'><img src={dot} alt="" /></span>
                    <div className='desc'>
                        <p className='testimony__text mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </p>
                        <h2 className='testimony__names'>Robert Fox</h2>
                        <p className='testimony__position'>Chef</p>
                    </div>
                </div>
                <div className='testimony__grid flex items-center gap-4 relative'>
                    <img src={img4} alt="" /><span className='testimony__dots absolute left-35 top-38'><img src={dot} alt="" /></span>
                    <div className='desc'>
                        <p className='testimony__text mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </p>
                        <h2 className='testimony__names'>Brooklyn Simmons</h2>
                        <p className='testimony__position'>Caterer</p>
                    </div>
                </div>


            </div>
        

        </div>
    </section>
  )
}
