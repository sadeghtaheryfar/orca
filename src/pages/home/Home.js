import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

//  images ...................................................................................................
import slider_home_1 from './../../images/slider-home-1.png';
import slider_home_2 from './../../images/slider-home-2.png';
import slider_home_3 from './../../images/slider-home-3.png';
import slider_home_4 from './../../images/slider-home-4.png';
import slider_home_5 from './../../images/slider-home-5.png';
import join_us_icon from './../../images/join-us-icon.png';
import green_technology from './../../images/green-technology.png';

const Home = () => {
    return (
        <>
            <main id='main-home' className='min-h-[100vh] w-[100vw] flex justify-between items-center'>
                <section className='w-[100%] h-full flex justify-center items-center pt-[10rem] pb-[2rem]'>
                    <div className='w-[50%]'>
                        <div className='text-justify'>
                            <p>
                                At Orca, we believe in the transformative power of public awareness to shape policies and corporate strategies for a sustainable future.  Our platform is dedicated to harnessing the collective strength of public engagement to drive meaningful change in environmental, social, and economic sustainability. 
                            </p>

                            <br />

                            <p>
                                Join us on our mission to empower individuals and communities to make a positive impact on the world around us. Together, we can create a brighter, more sustainable future for generations to come. 
                            </p>

                            <br />

                            <p className='flex justify-center items-center'>
                                Stay Tuned for more updates coming soon! <img className='ml-[0.5rem]' src={green_technology} />
                            </p>
                        </div>

                        <div className='w-full mt-[2rem]'>
                            <button className='w-full bg-[#157EC1] flex justify-center items-center p-[1rem] rounded-full text-white font-bold'>
                                <img className='mr-[0.5rem]' src={join_us_icon} />

                                <span>Join us</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className='w-[50%] min-w-[30%] h-full p-[1rem] flex justify-end'>
                    <Swiper
                            className="h-full z-20"
                            spaceBetween={50}
                            slidesPerView={1}
                            grabCursor={'pointer'}
                            loop={'true'}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                            }}
                            navigation={{ 
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Pagination, Navigation]}
                        >
                        <SwiperSlide>
                            <img className="h-full" src={slider_home_1} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="h-full" src={slider_home_2} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="h-full" src={slider_home_3} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="h-full" src={slider_home_4} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="h-full" src={slider_home_5} />
                        </SwiperSlide>

                        <div className='slider-home'>
                            <div>
                                <div className='swiper-button-prev' />
                                <div className='swiper-pagination' />
                                <div className='swiper-button-next' />
                            </div>
                        </div>
                    </Swiper>
                </section>
            </main>
        </>
    );
};

export default Home;