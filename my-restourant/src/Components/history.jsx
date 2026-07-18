import React from 'react'
import '../styles/_history.scss'


export default function history({spoon,spoon1,knife}) {
  return (
    <>
    <section className='history '>
        <div className='history__container '>
            <div className='history__container-1 mx-auto pt-15 pb-15 h-full'>
                <div className='history__container-2 G flex items-center gap-15'>
                        <div className='history__about '>
                            <div className='history__block mb-3 w-full flex flex-col items-end'>
                                <h2 className='history__title-1 mb-2'>About Us</h2>
                                <span className='history__spoon '><img src={spoon} alt="" /></span>
                            </div>
                            <div className='history__script'>
                                <p className='history__text-1 mb-6 '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quis <br />pharetra adipiscing ultrices vulputate posuere tristique. 
                                    In sed odio nec aliquet eu proin mauris et.
                                </p>
                                <div className='history__button w-full flex justify-end'>
                                    <button className='history__btn-1 py-2 px-7'>Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className='history__knife'>
                                <img src={knife} alt="" />
                        </div>
                        <div className='history__about'>
                            <div className='history__block mb-3'>
                                <h2 className='history__title mb-2'>Our History</h2>
                                <span className='history__spoon'><img src={spoon1} alt="" /></span>
                            </div>
                            <div className='history__script'>
                                <p className='history__text mb-6'>
                                    Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. <br />
                                    Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
                                </p>
                                <div className='history__button'>
                                    <button className='history__btn py-2 px-7'>Know More</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
