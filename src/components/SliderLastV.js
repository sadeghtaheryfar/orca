import React from 'react';

const SliderLastV = () => {
    return (
        <div>
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
        </div>
    );
};

export default SliderLastV;