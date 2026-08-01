import React from 'react'
import Header from '../About/header'
import arrow from '../assets/icons/arrow.svg'
import background from '../assets/imgs/about__header.jpg'
import History__spoon1 from '../assets/icons/history__spoon-2.svg'
import History from '../About/history'
import History__pic1 from '../assets/imgs/About__history-1.jpg'
import History__pic2 from '../assets/imgs/About__history-2.jpg'
import Liner from '../assets/icons/Liner.svg'
import About from '../About/aboutus'
import Video from '../assets/video/video.mp4'
import Chief from '../Components/chief'
import chief__img from '../assets/imgs/chief__img.jpg';
import dots from '../assets/icons/chief__``.svg'

export default function Home() {
  return (
    <>
    <Header arrow={arrow}/>
    <History spoon1={History__spoon1} pic__1={History__pic1} pic__2={History__pic2} liner={Liner} />
    <About spoon1={History__spoon1} video={Video}/>
    <Chief chiefs={chief__img} spoon={History__spoon1} dot={dots}/>
    </>
  )
}
