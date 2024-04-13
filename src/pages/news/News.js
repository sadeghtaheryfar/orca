import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import amazonelogo from './../../images/amazonelogo.png';
import banner from './../../images/banner.png';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const News = () => {
    return (
        <>
            <main id='main-posts' className='!bg-white no-padding-mobile'>
                <div className='hide-mobile'>
                    <h2 className='font-semibold mb-[2rem] text-[28px]'>Announcements</h2>
                </div>

                <div>
                    <div className='border-t-[3px] border-[#E6E6E6] p-[1.2rem] bg-white'>
                        <div>
                            <div className='font-bold text-[20px]'>
                                <h3>Orca Project</h3>
                            </div>

                            <div className='text-[#525252] text-[14px] font-semibold'>
                                <span>2024/04/02</span>
                            </div>

                            <div className='text-[#525252] text-justify mt-[0.5rem] text-[15px]'>
                                <p>🌊 Exciting News Alert! 🚀 We're thrilled to announce that Orca, the social media platform dedicated to sustainability, will be launching by the end of April! 🌍 Orca empowers individuals to take small steps towards a more environmentally, economically, and socially sustainable future. 🌱 Join us on our mission to make a positive impact on the planet and connect with like-minded individuals passionate about sustainability. Stay tuned for updates and get ready to dive into a greener world with Orca! 🐳 hashtag#OrcaLaunch hashtag#Sustainability hashtag#GreenFuture hashtag <span className='text-blue-600'>#ComingSoon</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default News;