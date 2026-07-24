import React from 'react'
import '../styles/_abouthistory.scss'



export default function history({spoon1,pic__1,pic__2,liner}) {
  return (
    <section className='About-history'>
        <div className='About-history__container px-40'>
            <div className='About-history__script w-full flex flex-col mb-15 items-center'>
                <p className='About-history__text'>Our History</p>
                <img src={spoon1} alt="" className='About-history-img mb-2' />
                <h2 className='About-history__title'>serving customers for over a decade</h2>
            </div>
            <div className='About-history__desc grid grid-cols-2 gap-7'>
                <div className='About-history__left'>
                    <p className='About-history__subtext mb-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quis pharetra adipiscing ultrices vulputate posuere tristique. 
                        In sed odio nec aliquet eu proin mauris et.
                    </p>
                    <div className='About-history__right-img flex-1 mb-10'>
                        <img src={pic__1} alt="" className=' object-cover' />
                    </div>
                </div>
                <div className='About-history__right'>
                    <div className='About-history__right-img flex-1 mb-10'>
                        <img src={pic__2} alt="" className='object-cover' />
                    </div>

                    <div className='About-history__block'>
                        <h2 className='About-history__subtitle mb-10'>Over The Years</h2>
                        <div className='About-history__rocks flex gap-10'>
                            <div className='About-history__rock'>
                                <h2>30+</h2>
                                <img src={spoon1} alt="" />
                                <p>Breakfast<br/>Options</p>
                            </div>
                            <img src={liner} alt="" />
                            <div className='About-history__rock'>
                                <h2>30+</h2>
                                <img src={spoon1} alt="" />
                                <p>Dinner<br/>Options</p>
                            </div>
                            <img src={liner} alt="" />
                            <div className='About-history__rock'>
                                <h2>30+</h2>
                                <img src={spoon1} alt="" />
                                <p>New<br />Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
