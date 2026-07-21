import React from 'react'
import '../styles/_articles.scss'


export default function Articles({img1,img2,img3,img4,search,facebook,insta,twitter,right_pic}) {
  return (
    <section className='articles'>
        <div className="articles__container flex items-center px-30">
            <div className="articles__blocks-1  px-0 py-0 ">
                <div className='articles__block-1__1 mb-16'>

                    <div className='articles__block w-full'>
                        <div className='articles__img'>
                            <img src={img1} alt="" />
                            <p className='articles__subtext'>16 Apr 2021 <span className='articles__span'>-Annalisa L</span></p>
                        </div>
                        <div className='articles__script'>
                            <h2 className='articles__title'>tips for prepping and caring for your grill</h2>
                            <p className='articles__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
                            </p>
                            <button className='articles__btn'>Read More</button>
                        </div>
                    </div>
                    <div className='articles__block'>
                        <div className='articles__img'>
                            <img src={img2} alt="" />
                            <p className='articles__subtext'>16 Apr 2021 <span className='articles__span'>-Annalisa L</span></p>
                        </div>
                        <div className='articles__script'>
                            <h2 className='articles__title'>tips for prepping and caring for your grill</h2>
                            <p className='articles__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
                            </p>
                            <button className='articles__btn'>Read More</button>
                        </div>
                    </div>
                    <div className='articles__block'>
                        <div className='articles__img'>
                            <img src={img3} alt="" />
                            <p className='articles__subtext'>16 Apr 2021 <span className='articles__span'>-Annalisa L</span></p>
                        </div>
                        <div className='articles__script'>
                            <h2 className='articles__title'>tips for prepping and caring for your grill</h2>
                            <p className='articles__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
                            </p>
                            <button className='articles__btn'>Read More</button>
                        </div>
                    </div>
                    <div className='articles__block'>
                        <div className='articles__img'>
                            <img src={img4} alt="" />
                            <p className='articles__subtext'>16 Apr 2021 <span className='articles__span'>-Annalisa L</span></p>
                        </div>
                        <div className='articles__script'>
                            <h2 className='articles__title'>tips for prepping and caring for your grill</h2>
                            <p className='articles__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
                            </p>
                            <button className='articles__btn'>Read More</button>
                        </div>
                    </div>

                </div>

                <button className='articles__block-btn'>View More</button>


            </div>


            <div className="articles__blocks-2 flex flex-col gap-8 py-10 px-6">

                <div className="articles__search">
                    <h2 className="articles__search-title mb-4">Search Page</h2>
                    <div className="articles__search-field flex items-center gap-2 ">
                    <input className="articles__search-input w-full" type="text" placeholder="Example" />
                    <button className="articles__search-btn">
                        <img src={search} alt="search" />
                    </button>
                    </div>
                </div>

                <div className="articles__categories">
                    <h2 className="articles__categories-title mb-4">All Categories</h2>
                    <ul className="articles__categories-list flex flex-col gap-3">
                    <li className="articles__categories-item flex items-center justify-between py-2">
                        <span className="articles__categories-name">Photography</span>
                        <span className='articles__categories-line'></span>
                        <span className="articles__categories-count">(1)</span>
                    </li>
                    <li className="articles__categories-item flex items-center justify-between py-2">
                        <span className="articles__categories-name">Baking</span>
                        <span className='articles__categories-line'></span>
                        <span className="articles__categories-count">(2)</span>
                    </li>
                    <li className="articles__categories-item flex items-center justify-between py-2">
                        <span className="articles__categories-name">Cooking Tips</span>
                        <span className='articles__categories-line'></span>
                        <span className="articles__categories-count">(6)</span>
                    </li>
                    </ul>
                </div>

                <div className="articles__latest">
                    <h2 className="articles__latest-title mb-4">Our Latest Posts</h2>
                    <div className="articles__post">
                    <div className="articles__post-figure">
                        <img src={right_pic} alt="Summer Cocktails" className="articles__post-image w-full" />
                    </div>
                    <div className="articles__post-body flex flex-col gap-2 py-4">
                        <div className="articles__post-meta flex items-center mb-8 justify-between gap-4">
                        <span className="articles__post-date">23 May 2021</span>
                        <span className="articles__post-author">John Micheal</span>
                        </div>
                        <h3 className="articles__post-title">Summer Cocktails And Mocktails</h3>
                        <p className="articles__post-text mb-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit....
                        </p>
                        <a href="#" className="articles__post-link">Read More</a>
                    </div>
                    </div>
                </div>

                <div className="articles__tags">
                    <h2 className="articles__tags-title mb-4">Related Tags</h2>
                    <div className="articles__tags-list flex items-center flex-wrap gap-2">
                    <span className="articles__tag">Grilling</span>
                    <span className="articles__tags-divider"></span>
                    <span className="articles__tag">Cooking</span>
                    <span className="articles__tags-divider"></span>
                    <span className="articles__tag">Baking</span>
                    </div>
                    <div className="articles__tags-list flex items-center flex-wrap gap-2 mt-2">
                    <span className="articles__tag">Cuisines</span>
                    <span className="articles__tags-divider"></span>
                    <span className="articles__tag">Chef</span>
                    <span className="articles__tags-divider"></span>
                    <span className="articles__tag">Alcohol Mixing</span>
                    </div>
                </div>

                <div className="articles__share">
                    <h2 className="articles__share-title mb-4">Share</h2>
                    <div className="articles__share-socials flex items-center gap-4">
                    <a href="#" className="articles__share-link">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="#" className="articles__share-link">
                        <img src={insta} alt="Twitter" />
                    </a>
                    <a href="#" className="articles__share-link">
                        <img src={twitter} alt="Instagram" />
                    </a>
                    </div>
                </div>

            </div>
            
        </div>
    </section>
  )
}
