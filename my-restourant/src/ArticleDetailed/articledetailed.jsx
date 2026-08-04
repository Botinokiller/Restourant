import React from 'react'
import ReactDOM from "react-dom/client";
import Arrow from '../assets/icons/Blogs__arrow.svg'
import BlogHeader from '../Blog/blogHeader.jsx'
import Articles from '../Blog/Articles.jsx'
import History__spoon1 from '../assets/icons/history__spoon-2.svg'
import Facebook from '../assets/icons/facebook.svg'
import insta from '../assets/icons/insta.svg'
import Twitter from '../assets/icons/twitter.svg'
import blogDetail from '../Blog/blogDetail.jsx';
import detail__pic from '../assets/imgs/detail__picture.jpg'
import detail__pic2 from '../assets/imgs/detail__picture-2.jpg'
import detail__pic3 from '../assets/imgs/detail__picture-3.jpg'
import search from '../assets/icons/articles__search.svg'
import down from '../assets/icons/blog__down.svg'
import chat from '../assets/icons/detail__chat.svg'
import favorite from '../assets/icons/detail__favorite.svg'
import blog__left from '../assets/imgs/Blog__left.jpg'
import Detail from '../Blog/blogDetail.jsx'
import Comments from '../Blog/Comments.jsx'
import avatar1 from '../assets/imgs/avatar-1.jpg'
import avatar2 from '../assets/imgs/avatar-2.jpg'
import avatar3 from '../assets/imgs/avatar-3.jpg'
import Newsletter from '../Components/newsletter.jsx'

export default function articledetailed() {
  return (
    <>
    <Detail background={detail__pic} background2={detail__pic2} up={up} down={down} background3={detail__pic3} chat={chat} favorite={favorite} search={search} right_pic={blog__left} facebook={Facebook} insta={insta} twitter={Twitter}/>
    <Comments avatar1={avatar1} avatar2={avatar2} avatar3={avatar3} />
    <Newsletter spoon={History__spoon1}/>
    <Footer spoon={History__spoon1} face={Facebook} insta={insta} twitter={Twitter}/>
    </>
  )
}
