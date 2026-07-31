import React from 'react'
import '../styles/_detail.scss'
// import '../styles/_articles.scss'

export default function blogDetail({background,background2,up,down,background3,chat,favorite,search,right_pic,facebook,insta,twitter}) {
  return (
    <section className='detail'>
        <div className='detail__container px-30'>
            <div className='detail__top mb-8'>
                <div className='detail__top-text flex justify-between mb-6'>
                    <p className='detail__text'>16 Apr 2021</p>
                    <span className='detail__text-span'>- Annalisa L</span>
                </div>
                <div className='detail__top-sub'>
                    <h2 className='detail__title mb-10'>tips for prepping and caring for your grill</h2>
                    <img src={background} alt="" />
                </div>
            </div>

            <div className='detail__bottom flex gap-15'>
                <div className='detail__right'>
                    <p className='detail__paragraph mb-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. 
                        Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. 
                        Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. 
                        Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.
                    </p>
                    <div className='detail__script mb-10'>
                        <h2 className='detail__subtitle mb-8'>How to prepare your grill</h2>
                        <p className='detail__text mb-8'> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem.
                             Purus morbi sagittis, faucibus odio. 
                        </p>
                        <div className='detail__subtext'>
                            <p className='detail__point'><span className='detail__line'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='detail__point'><span className='detail__line'></span>Tincidunt pharetra ut lobortis id.</p>
                            <p className='detail__point'><span className='detail__line'></span>Commodo sit libero lacus a egestas penatibus pretium quis lorem. </p>
                        </div>
                        <div className='detail__imgs'>
                            <img src={background2} alt="" className='detail__ mb-10 w-full' />
                            <p className='detail__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id.
                                Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
                                Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. 
                                Pellentesque eu malesuada id vitae risus, libero.Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.
                            </p>
                        </div>
                    </div>
                    <div className='detail__script-2 relative'>
                        <div className='detail__box  p-15'>
                            <img src={up} alt="" className='detail__box-up absolute left-6 bottom-28' />
                            <h2 className='detail__box-title'>There is no love sincerer than the love of food.</h2>
                            <img src={down} alt=""className='detail__box-up absolute right-10 top-30' />
                        </div>
                    </div>

                    <div className='detail__bt-box flex gap-5 mt-10 mb-10'>
                        <div className='detail__bt-script'>
                            <h2 className='detail__bt-title mb-8'>How to care for your grill</h2>
                            <p className='detail__bt-text mb-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Tin cidunt pharetra ut lobortis id. 
                                Commodo sit libero lacus a egestas penatibus pretium quis lorem.
                            </p>
                            <p className='detail__point'><span className='detail__line'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='detail__point'><span className='detail__line'></span>Tincidunt pharetra ut lobortis id.</p>
                            <p className='detail__point'><span className='detail__line'></span>Commodo sit libero lacus a egestas penatibus</p>
                        </div>
                        <div className='detail__imgs w-full'>
                            <img src={background3} className='detail__img w-full' alt="" />
                        </div>
                    </div>
                    <div className='detail__comments'>
                        <p className='detail__script-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id.
                            Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
                        </p>
                        <div className='detail__hashtags flex justify-between mt-10'>
                            <div className='detail__hashtags-1 flex gap-4'>
                                <a href="##" className='detail__hashtag'>#Grilling</a>
                                <a href="##" className='detail__hashtag'>#Outdoors</a>
                                <a href="##" className='detail__hashtag'>#Cooking</a>
                            </div>
                            <div className='detail__additional flex gap-8'>

                                <div className='detail__chats flex gap-3'>
                                    <img src={chat} className='detail__chat-icon' alt="" />
                                    <span className='detail__chat-text'>Comment</span>
                                </div>
                                <div className='detail__favorite flex gap-3'>
                                    <img src={favorite} className='detail__chat-icon' alt="" />
                                    <span className='detail__chat-text'>Comment</span>
                                </div>

                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="detail__blocks-2 flex w-full flex-col">

                    <div className="detail__search">
                        <h2 className="detail__search-title mb-4">Search Page</h2>
                        <div className="detail__search-field flex items-center gap-2 ">
                        <input className="detail__search-input w-full" type="text" placeholder="Example" />
                        <button className="detail__search-btn">
                            <img src={search} alt="search" />
                        </button>
                        </div>
                    </div>

                    <div className="detail__categories">
                        <h2 className="detail__categories-title mb-4">All Categories</h2>
                        <ul className="detail__categories-list flex flex-col gap-3">
                        <li className="detail__categories-item flex items-center justify-between py-2">
                            <span className="detail__categories-name">Photography</span>
                            <span className='detail__categories-line'></span>
                            <span className="detail__categories-count">(1)</span>
                        </li>
                        <li className="detail__categories-item flex items-center justify-between py-2">
                            <span className="detail__categories-name">Baking</span>
                            <span className='detail__categories-line'></span>
                            <span className="detail__categories-count">(2)</span>
                        </li>
                        <li className="detail__categories-item flex items-center justify-between py-2">
                            <span className="detail__categories-name">Cooking Tips</span>
                            <span className='detail__categories-line'></span>
                            <span className="detail__categories-count">(6)</span>
                        </li>
                        </ul>
                    </div>

                    <div className="detail__latest">
                        <h2 className="detail__latest-title mb-4">Our Latest Posts</h2>
                        <div className="detail__post">
                        <div className="detail__post-figure">
                            <img src={right_pic} alt="Summer Cocktails" className="detail__post-image w-full" />
                        </div>
                        <div className="detail__post-body flex flex-col gap-2 py-4">
                            <div className="detail__post-meta flex items-center mb-8 justify-between gap-4">
                            <span className="detail__post-date">23 May 2021</span>
                            <span className="detail__post-author">John Micheal</span>
                            </div>
                            <h3 className="detail__post-title">Summer Cocktails And Mocktails</h3>
                            <p   p className="detail__post-text mb-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit....
                            </p>
                            <a href="#" className="detail__post-link">Read More</a>
                        </div>
                        </div>
                    </div>

                    <div className="detail__tags">
                        <h2 className="detail__tags-title mb-4">Related Tags</h2>
                        <div className="detail__tags-list flex items-center flex-wrap gap-2">
                        <span className="detail__tag">Grilling</span>
                        <span className="detail__tags-divider"></span>
                        <span className="detail__tag">Cooking</span>
                        <span className="detail__tags-divider"></span>
                        <span className="detail__tag">Baking</span>
                        </div>
                        <div className="detail__tags-list flex items-center flex-wrap gap-2 mt-2">
                        <span className="detail__tag">Cuisines</span>
                        <span className="detail__tags-divider"></span>
                        <span className="detail__tag">Chef</span>
                        <span className="detail__tags-divider"></span>
                        <span className="detail__tag">Alcohol Mixing</span>
                        </div>
                    </div>

                    <div className="detail__share">
                        <h2 className="detail__share-title mb-4">Share</h2>
                        <div className="detail__share-socials flex items-center gap-4">
                        <a href="#" className="detail__share-link">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="#" className="detail__share-link">
                            <img src={insta} alt="Twitter" />
                        </a>
                        <a href="#" className="detail__share-link">
                            <img src={twitter} alt="Instagram" />
                        </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}