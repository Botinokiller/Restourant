import React from 'react'
import Header from '../Components/header';
import Header__img from '../assets/imgs/header__img.jpg'
import header__spoon from '../assets/icons/header__spoon.svg'
import History from '../Components/history'
import History__spoon from '../assets/icons/history__spoon.svg'
import History__spoon1 from '../assets/icons/history__spoon-2.svg'
import History__knife from '../assets/icons/history__knife.svg'
import Book from '../Components/book'
import Menu from '../Components/menu'
import Special from '../Components/special'
import Chief from '../Components/chief'
import special__middle from '../assets/imgs/special__middle.jpg';
import chief__img from '../assets/imgs/chief__img.jpg';
import dots from '../assets/icons/chief__``.svg';
import Testimony from '../Components/testimony';
import test__img1 from '../assets/imgs/testimony__img1.jpg';
import test__img2 from '../assets/imgs/testimony__img2.jpg';
import test__img3 from '../assets/imgs/testimony__img3.jpg';
import test__img4 from '../assets/imgs/testimony__img4.jpg';
import Awards from '../Components/awards'
import Secondplace from '../assets/icons/awards__2.svg';
import Firstplace from '../assets/icons/awards__1.svg';
import Thirdplace from '../assets/icons/awards__3.svg';
import Fifthplace from '../assets/icons/awards__5.svg';
import awards__food from '../assets/imgs/awards__food.jpg';
import g from '../assets/icons/awards__g.svg';
import Blogs from '../Components/blogs'
import Blogs1 from '../assets/imgs/blogs__img1.jpg'
import Blogs2 from '../assets/imgs/blogs__img2.jpg'
import Blogs3 from '../assets/imgs/blogs__img3.jpg'
// import Blogs4 from '../assets/imgs/blogs__img4.jpg'
import Gallery from '../Components/gallery'
import Gallery__img1 from '../assets/imgs/gallery__img1.jpg';
import Gallery__img2 from '../assets/imgs/gallery__img2.jpg';
import Gallery__img3 from '../assets/imgs/gallery__img3.jpg';
import Gallery__img4 from '../assets/imgs/gallery__img4.jpg';
import Gallery__img5 from '../assets/imgs/gallery__img5.jpg';
import News from '../Components/newsletter';
import Footer from '../Components/footer';
import Facebook from '../assets/icons/facebook.svg'
import Insta from '../assets/icons/insta.svg'
import Twitter from '../assets/icons/twitter.svg'




export default function Mainhome() {
  return (
    <>
     {/* <Header spoon={header__spoon} header={Header__img}/> */}
     <History spoon={History__spoon} spoon1={History__spoon1} knife={History__knife}/>
     {/* <Book spoon={History__spoon1}/> */}
     {/* <Menu /> */}
     {/* <Special middle={special__middle} spoon={History__spoon1}/> */}
     {/* <Chief chiefs={chief__img} spoon={History__spoon1} dot={dots}/> */}
     {/* <Testimony spoon={History__spoon1} img1={test__img1} img2={test__img2} img3={test__img3} img4={test__img4} dot={dots}/> */}
     {/* <Awards spoon={History__spoon1} second={Secondplace} first={Firstplace} third={Thirdplace} fifth={Fifthplace} food={awards__food}G={g} /> */}
     {/* <Blogs spoon={History__spoon1} img1={Blogs1} img2={Blogs2} img3={Blogs3}/> */}
     {/* <Gallery spoon={History__spoon1} img1={Gallery__img1} img2={Gallery__img2} img3={Gallery__img3} img4={Gallery__img4} img5={Gallery__img5}/> */}
     {/* <News spoon={History__spoon1}/> */}
     {/* <Footer  spoon={History__spoon1} face={Facebook} insta={Insta} twitter={Twitter} /> */}
    </>
  )
}
