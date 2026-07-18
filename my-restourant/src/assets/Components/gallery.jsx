import React, { useRef, useState } from 'react'
import '../styles/_gallery.scss';

export default function Gallery({ spoon, img1, img2, img3, img4, img5 }) {

  const trackRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
    trackRef.current.style.cursor = 'grabbing'
  }

  const onMouseUp = () => {
    setIsDragging(false)
    trackRef.current.style.cursor = 'grab'
  }

  const onMouseLeave = () => {
    setIsDragging(false)
    trackRef.current.style.cursor = 'grab'
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5   // ← 1.5 = scroll speed multiplier
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className='gallery'>
      <div className='gallery__container'>
        <div className='gallery__layout'>
          <div className='gallery__layout-1 flex gap-16 items-center px-25 py-30'>

            <div className='gallery__block'>
              <div className='gallery__top'>
                <p className='gallery__text'>Instagram</p>
                <img src={spoon} alt="" />
                <h2 className='gallery__title'>Photo Gallery</h2>
                <p className='gallery__subtext'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                </p>
              </div>
              <div className='gallery__button'>
                <button className='gallery__btn'>View More</button>
              </div>
            </div>

            <div className='gallery__block-2'>
              <div
                className='gallery__blocks'
                ref={trackRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
              >
                <a href="" className='gallery__link w-full'><img src={img1} className='gallery__img' alt="" /></a>
                <a href="" className='gallery__link w-full'><img src={img2} className='gallery__img' alt="" /></a>
                <a href="" className='gallery__link w-full'><img src={img3} className='gallery__img' alt="" /></a>
                <a href="" className='gallery__link w-full'><img src={img4} className='gallery__img' alt="" /></a>
                <a href="" className='gallery__link w-full'><img src={img5} className='gallery__img' alt="" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}