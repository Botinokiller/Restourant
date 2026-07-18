import React from 'react'
import '../styles/_awards.scss';


export default function awards({spoon,second,first,third,fifth,food,G}) {
  return (
    <section className='awards'>
        <div className='awards__container'>
            <div className='awards__overlay flex items-center gap-35 px-20 py-20'>
                <div className='awards__left'>
                    <div className='awards__script'>
                        <p className='awards__subtitle pb-2'>Awards & recognition</p>
                        <img src={spoon} alt="" className='pb-2'/>
                        <h2 className='awards__title pb-15'>Our Laurels</h2>
                    </div>
                    <div className='awards__grids grid gap-8 grid-cols-2'>
                        <div className='awards__grid flex gap-8'>
                            <img src={second} alt="second" />
                            <div className='awards__script'>
                                <h2 className='awards__script-title'>Bib Gourmond</h2>
                                <p className='awards__script-text'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div> 
                        <div className='awards__grid flex gap-8'>
                            <img src={first} alt="first" />
                            <div className='awards__script'>
                                <h2 className='awards__script-title'>Rising Star</h2>
                                <p className='awards__script-text'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div> 
                        <div className='awards__grid flex gap-8'>
                            <img src={fifth} alt="fifth" />
                            <div className='awards__script'>
                                <h2 className='awards__script-title'>AA Hospitality</h2>
                                <p className='awards__script-text'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div> 
                        <div className='awards__grid flex gap-8'>
                            <img src={third} alt="fifth" />
                            <div className='awards__script'>
                                <h2 className='awards__script-title'>Outstanding Chef</h2>
                                <p className='awards__script-text'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='awards__right relative'>
                    <div className='awards__img'>
                        <img src={food} alt="" />
                    </div>
                    <img src={G} alt="" className='absolute bottom-0 right-30' />

                </div>

            </div>
        </div>
    </section>
  )
}
