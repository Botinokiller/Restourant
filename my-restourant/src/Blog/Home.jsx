import React from 'react'
// import Navbar from '../Components/navbar.jsx'
import Navbar from '../Components/navbar.jsx'
import line from '../assets/icons/navbar__line.svg'
import BlogHeader from '../Blog/blogHeader.jsx'
import Arrow from '../assets/icons/Blogs__arrow.svg'
import Articles from '../Blog/Articles.jsx'
import Footer from '../Components/footer.jsx'
import History__spoon1 from '../assets/icons/history__spoon-2.svg'
import Facebook from '../assets/icons/facebook.svg'
import insta from '../assets/icons/insta.svg'
import Twitter from '../assets/icons/twitter.svg'
import Blogs1 from '../assets/imgs/blogs__img1.jpg'
import Blogs2 from '../assets/imgs/blogs__img2.jpg'
import Blogs3 from '../assets/imgs/blogs__img3.jpg'
import Blogs4 from '../assets/imgs/blogs__img4.jpg'
import search from '../assets/icons/articles__search.svg'
import blog__left from '../assets/imgs/Blog__left.jpg'
import detail__pic from '../assets/imgs/detail__picture.jpg'
import Detail from './blogDetail.jsx'
import detail__pic2 from '../assets/imgs/detail__picture-2.jpg'
import detail__pic3 from '../assets/imgs/detail__picture-3.jpg'
import up from '../assets/icons/blog__up.svg'
import down from '../assets/icons/blog__down.svg'
import chat from '../assets/icons/detail__chat.svg'
import favorite from '../assets/icons/detail__favorite.svg'

export default function Home() {
  return (
    <>
      {/* <Navbar line={line}/> */}
      {/* <BlogHeader arrow={Arrow}/> */}
      {/* <Articles img1={Blogs1} img2={Blogs2} img3={Blogs3} img4={Blogs4} search={search} facebook={Facebook} insta={insta} twitter={Twitter} right_pic={blog__left}/> */}
      {/* <Footer spoon={History__spoon1} face={Facebook} insta={insta} twitter={Twitter}/> */}

      {/* <Navbar line={line}/> */}
      {/* <BlogHeader arrow={Arrow}/> */}
      <Articles img1={Blogs1} img2={Blogs2} img3={Blogs3} img4={Blogs4} search={search} facebook={Facebook} insta={insta} twitter={Twitter} right_pic={blog__left}/>
      {/* <Footer spoon={History__spoon1} face={Facebook} insta={insta} twitter={Twitter}/> */}
      <Detail background={detail__pic} background2={detail__pic2} up={up} down={down} background3={detail__pic3} chat={chat} favorite={favorite} search={search} right_pic={blog__left} facebook={Facebook} insta={insta} twitter={Twitter}/>
      
    </>
  )
}

