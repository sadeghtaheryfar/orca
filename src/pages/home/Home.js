import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';

//  images ................................................................................................
import logo_comin_son from '../../images/green-technology.png';
import slider_home_1 from './../../images/slider-home-1.png';
import slider_home_2 from './../../images/slider-home-2.png';
import slider_home_3 from './../../images/slider-home-3.png';
import slider_home_4 from './../../images/slider-home-4.png';

const Home = () => {
    return (
        <>
            <main id='main-home'>
                <div className='h-full flex lg:items-start lg:justify-center flex-col lg:w-[65%] lg:mr-[2rem] px-[2rem] lg:pt-[2rem]'>
                    <h2 className='text-[28px] text-[#525252] font-semibold mb-[2rem]'>Welcome to Orca</h2>

                    <p className='text-justify'>
                        At Orca, we believe in the transformative power of public awareness to shape policies and corporate strategies for a sustainable future.  Our platform is dedicated to harnessing the collective strength of public engagement to drive meaningful change in environmental, social, and economic sustainability. 
                        <br/>Join us on our mission to empower individuals and communities to make a positive impact on the world around us. Together, we can create a brighter, more sustainable future for generations to come. 
                    </p>

                    <div className='bg-[#EDFDED] px-[1.2rem] py-[0.7rem] rounded-[12px] text-[#525252] flex justify-start items-center w-full mt-[2rem]'>
                        <img className='mr-[0.5rem]' src={logo_comin_son} />
                        
                        <span>Stay Tuned for more updates coming soon!</span>
                    </div>

                    <Link className='hide-pc text-center w-full my-[1rem] justify-center py-[0.8rem] px-[1.2rem] bg-[#157EC1] font-bold text-[1.2rem] text-white rounded-full'>Join Us</Link>
                </div>

                <div className="w-[35%]">
                    <Swiper
                        loop={'true'}
                        direction={'vertical'}
                        slidesPerView={'auto'}
                        centeredSlides={'true'}
                        grabCursor={'true'}
                        spaceBetween={30}
                        speed={2000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay,]}
                        className="main-slider-home min-w-[20rem] my-[-2rem] hide-mobile"
                    >
                        <SwiperSlide className='w-full'>
                            <img src={slider_home_1} />
                        </SwiperSlide>

                        
                        <SwiperSlide className='w-full'>
                            <img src={slider_home_2} />
                        </SwiperSlide>

                        
                        <SwiperSlide className='w-full'>
                            <img src={slider_home_3} />
                        </SwiperSlide>

                        
                        <SwiperSlide className='w-full'>
                            <img src={slider_home_4} />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div>
                    <Swiper
                        loop={'true'}
                        slidesPerView={'auto'}
                        centeredSlides={'true'}
                        grabCursor={'true'}
                        spaceBetween={10}
                        speed={2000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay,]}
                        className="mx-[-2rem] mt-[2rem] hide-pc"
                    >
                        <SwiperSlide className='w-[55%]'>
                            <img src={slider_home_1} />
                        </SwiperSlide>

                        
                        <SwiperSlide className='w-[55%]'>
                            <img src={slider_home_2} />
                        </SwiperSlide>

                        
                        <SwiperSlide className='w-[55%]'>
                            <img src={slider_home_3} />
                        </SwiperSlide>

                        
                        <SwiperSlide className='w-[55%]'>
                            <img src={slider_home_4} />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='mt-[2rem] text-[#525252] hide-pc text-[12px] w-full flex justify-center'>
                    <ul className='flex justify-center'>
                        <li>About Us</li>
                        <li className='mx-[1rem]'>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;