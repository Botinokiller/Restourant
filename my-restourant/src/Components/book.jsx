import React from 'react'
import '../styles/_book.scss'

export default function Book({spoon}) {
  return (
    <section className='book'>
        <div className='book__container'>
            <div className='book__block flex flex-col items-center '>
                <div className='book__script'>
                    <p className='book__text mb-2'>Reservations</p>
                    <span className='book__spoon w-full flex justify-center mb-2'><img src={spoon} alt="" /></span>
                    <h2 className='book__title mb-8'>Book a Table</h2>
                </div>
                <div className='book__filler flex'>

                <div className="booking__field">
                <select className="booking__select px-6 py-4">
                    <option value="" className='booking__person'>1 Person</option>
                    <option value="" className='booking__person'>2 People</option>
                    <option value="" className='booking__person'>3 People</option>
                    <option value="" className='booking__person'>4 People</option>
                    <option value="" className='booking__person'>5 People</option>
                    <option value="" className='booking__person'>6 People</option>
                    <option value="" className='booking__person'>7 People</option>
                    <option value="" className='booking__person'>8 People</option>
                    <option value="" className='booking__person'>9 People</option>
                    <option value="" className='booking__person'>10+ People</option>
                </select>
                </div>
                <div className="booking__field">
                <input
                    type="date"
                    className="booking__select"
                    min={new Date().toISOString().split('T')[0]}        
                    max="2030-12-31"                                    
                />
                </div>
                <div className="booking__field">
                <select className="booking__select">
                    <option value="">12:00 AM</option>
                    <option value="">12:30 AM</option>
                    <option value="">01:00 AM</option>
                    <option value="">01:30 AM</option>
                    <option value="">02:00 AM</option>
                    <option value="">02:30 AM</option>
                    <option value="">03:00 AM</option>
                    <option value="">03:30 AM</option>
                    <option value="">04:00 AM</option>
                    <option value="">04:30 AM</option>
                    <option value="">05:00 AM</option>
                    <option value="">05:30 AM</option>
                    <option value="">06:00 AM</option>
                    <option value="">06:30 AM</option>
                    <option value="">07:00 AM</option>
                    <option value="">07:30 AM</option>
                    <option value="">08:00 AM</option>
                    <option value="">08:30 AM</option>
                    <option value="">09:00 AM</option>
                    <option value="">09:30 AM</option>
                    <option value="">10:00 AM</option>
                    <option value="">10:30 AM</option>
                    <option value="">11:00 AM</option>
                    <option value="">11:30 AM</option>
                    <option value="">12:00 PM</option>
                    <option value="">12:30 PM</option>
                    <option value="">01:00 PM</option>
                    <option value="">01:30 PM</option>
                    <option value="">02:00 PM</option>
                    <option value="">02:30 PM</option>
                    <option value="">03:00 PM</option>
                    <option value="">03:30 PM</option>
                    <option value="">04:00 PM</option>
                    <option value="">04:30 PM</option>
                    <option value="">05:00 PM</option>
                    <option value="">05:30 PM</option>
                    <option value="">06:00 PM</option>
                    <option value="">06:30 PM</option>
                    <option value="">07:00 PM</option>
                    <option value="">07:30 PM</option>
                    <option value="">08:00 PM</option>
                    <option value="">08:30 PM</option>
                    <option value="">09:00 PM</option>
                    <option value="">09:30 PM</option>
                    <option value="">10:00 PM</option>
                    <option value="">10:30 PM</option>
                    <option value="">11:00 PM</option>
                    <option value="">11:30 PM</option>
                </select>
                </div>

                </div>
                <div className='book__button'>
                    <button className='book__btn px-7 py-2 '>Book More</button>

                </div>

            </div>
        </div>
    </section>
  )
}
