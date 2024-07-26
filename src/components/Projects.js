import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { Pagination, Navigation, EffectCards, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import thebee from '../images/thebee-site.png'
import galien from '../images/galien-site.png'
import portofolio from '../images/portofolio-site.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Projects() {
    return (
        <>
            <h2>Projects</h2 >
            <div id='project'>
            <div className='container'>
                    <Swiper
                        className='project-container'
                        modules={[Pagination, Navigation, Autoplay, EffectCards]}
                        //spaceBetween={20}
                        slidesPerView={'auto'}
                        //pagination={{ clickable: true }}
                        autoplay={{ delay: 8000 }}
                        effect={'cards'}
                        centeredSlides={true}
                        grabCursor={true}
                        //onSwiper={(swiper) => console.log(swiper)}
                        //onSlideChange={() => console.log('slide change')}
                        style={{
                            "--swiper-pagination-color": "rgb(30, 143, 255)",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "0.5",
                            "--swiper-pagination-bullet-size": "10px",
                            "--swiper-pagination-bullet-horizontal-gap": "10px"
                        }}
                    >
                        <SwiperSlide className='project-slide'>
                            <div className='desc-grid'>
                                <div className='name'>
                                    <h5>Site Officiel de La Policlinique Galien</h5>
                                </div>
                                <div className='link'>
                                    <a href="https://www.poligalien.com/" target="_blank" rel="noreferrer">
                                        <span><FontAwesomeIcon icon={faLink} /></span>
                                    </a>
                                </div>
                            </div>
                            <div className='img-grid'>
                                <img src={galien} alt='project'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='project-slide'>
                            <div className='desc-grid'>
                                <div className='name'>
                                    <h5>Site Officiel de The Bee RDC</h5>
                                </div>
                                <div className='link'>
                                    <a href="https://www.thebeerdc.com/" target="_blank" rel="noreferrer">
                                        <span><FontAwesomeIcon icon={faLink} /></span>
                                    </a>
                                </div>
                            </div>
                            <div className='img-grid'>
                                <img src={thebee} alt='project'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='project-slide'>
                            <div className='desc-grid'>
                                <div className='name'>
                                    <h5>Mon site portofolio</h5>
                                </div>
                                <div className='link'>
                                    <a href="https://www.yannickmakwenge.com/" target="_blank" rel="noreferrer">
                                        <span><FontAwesomeIcon icon={faLink} /></span>
                                    </a>
                                </div>
                            </div>
                            <div className='img-grid'>
                                <img src={portofolio} alt='project'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Projects