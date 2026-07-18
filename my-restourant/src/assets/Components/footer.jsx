import React from 'react'
import '../styles/_footer.scss';


export default function footer({spoon,face,insta,twitter}) {
  return (
    <section className='footer'>
        <div className='footer__container'>
            <div className='footer__overlay py-25'>
                <div className='footer__blocks justify-between w-full px-20 mb-15 items-center gap-10  flex'>
                    <div className="footer__block-1 flex flex-col items-center">
                        <h2 className='footer__title mb-6'>Contact Us</h2>
                        <p className='footer__address mb-2'>9 W 53rd St, New York, NY 10019, USA</p>
                        <p className='footer__phone'>+1 212-344-1230</p>
                        <p className='footer__phone'>+1 212-344-1230</p>
                    </div>
                    <div className='footer__block-2 flex flex-col items-center'>
                        <div className='footer__top flex flex-col items-center'>
                            <h2 className='footer__title-1 mb-4'>Gerícht</h2>
                            <p className='footer__script'>"The best way to find yourself is to lose yourself in the <br /> service of others.”</p>
                        </div>
                        <div className='footer__bottom flex flex-col items-center'>
                            <img src={spoon} alt="" className='mb-4 mt-4' />
                            <div className='footer__icons flex gap-3'>
                                <img src={face} alt="" />
                                <img src={insta} alt="" />
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer__block-3 flex flex-col items-center">
                        <h2 className='footer__title mb-4'>Working Hours</h2>
                        <p className='footer__days flex flex-col  items-center'>
                            Monday-Friday:
                            <span className='footer__span '>08:00 am - 12:00 am</span>
                        </p>
                        <p className='footer__days flex flex-col items-center'>
                            Saturday-Sunday:
                            <span className='footer__span'>07:00 am - 11:00 pm</span>
                        </p>
                    </div>
                </div>
                <h2 className='footer__reserved flex justify-center px-20 pr-3  '>2021 Gerícht. All Rights reserved.</h2>

            </div>
        </div>
    </section>
  )
}
