
import React from 'react'
import Header from '../Contact/contactHeader'
import arrow from '../assets/icons/arrow.svg'
import Address from '../Contact/address'
import Message from '../Contact/message'
import Food from '../assets/imgs/awards__food.jpg'
import G from '../assets/icons/history__g.svg'
import Newsletter from '../Components/newsletter'
import Footer from '../Components/footer'


export default function Contact() {
  return (
    <>
    <Header arrow={arrow}/>
    <Address/>
    <Message food={Food} G={G}/>
    <Newsletter/>
    <Footer/>
    </>
  )
}
