import React from 'react'

import '../styles/_special.scss'



export default function({middle,spoon}) {
  return (
    <section className='special pt-20'>
        <div className='special__container '>
            <div className='special__script flex  flex-col items-center w-full'>
                <h1 className='special-title'>Menu that fits You Palatte</h1>
                <span className='special-span flex justify-center'><img src={spoon} alt="" /></span>
                <h2 className='special-text'>Today's Special</h2>
            </div>
            <div className='special__block w-full justify-center flex gap-10 mb-10'>
                <div className='special__wines'>
                    <h2 className='special__wines-title'>Wine & Beer</h2>
                    <div className='special__wine'>
                        <div className='special__header flex items-center gap-8 justify-between'>
                            <h2 className='special__name'>Chapel Hill Shiraz</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$56</p>
                        </div>
                        <p className='special__bottles'> AU <span className='special__divider'>|</span> Bottle</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex items-center gap-8 justify-between'>
                            <h2 className='special__name'>Catena Malbec</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$59</p>
                        </div>
                        <p className='special__bottles'> AR <span className='special__divider'>|</span> Bottle</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex items-center gap-8 justify-between'>
                            <h2 className='special__name'>La Vieille Rosé</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$44</p>
                        </div>
                        <p className='special__bottles'> FR <span className='special__divider'>|</span> 750 ml</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex items-center gap-8 justify-between'>
                            <h2 className='special__name'>Rhino Pale Ale</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$31</p>
                        </div>
                        <p className='special__bottles'> CA <span className='special__divider'>|</span> 750 ml</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex items-center gap-8 justify-between'>
                            <h2 className='special__name'>Irish Guinness</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$26</p>
                        </div>
                        <p className='special__bottles'> IE <span className='special__divider'>|</span> 750 ml</p>
                    </div>
                </div>
            <div className='special__img'>
                <img src={middle} alt="" /> 
            </div>
                <div className='special__wines'>
                    <h2 className='special__wines-title'>Cocktails</h2>
                    <div className='special__wine'>
                        <div className='special__header'>
                            <h2 className='special__name'>Aperol Spritz</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$20</p>
                        </div>
                        <p className='special__bottles'> Aperol | Villa Marchesi prosecco | soda | 30ml</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex justify-around'>
                            <h2 className='special__name'>Dark 'N' Stormy</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$16</p>
                        </div>
                        <p className='special__bottles'>Dark rum | Ginger beer | Slice of lime.</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex justify-around'>
                            <h2 className='special__name'>Daiquiri</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$10</p>
                        </div>
                        <p className='special__bottles'>Rum | Citrus juice | Sugar</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex justify-around'>
                            <h2 className='special__name'>Old Fashioned</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$31</p>
                        </div>
                        <p className='special__bottles'>Bourbon | Brown sugar | Angostura Bitters</p>
                    </div>
                    <div className='special__wine'>
                        <div className='special__header flex justify-around'>
                            <h2 className='special__name'>Irish Guinness</h2>
                            <span className='special__line'></span>
                            <p className='special__price'>$26</p>
                        </div>
                        <p className='special__bottles'>Gin | Sweet Vermouth | Campari | Orange garnish</p>
                    </div>
                </div>

            </div>

            <div className='special__button flex justify-center w-full'>
                <button className='special__btn px-8 py-2 '>View More</button>
            </div>

        </div>
        
    </section>
  )
}
