import React from 'react';
import amazonelogo from './../../images/amazonelogo.png';
import banner from './../../images/banner.png';
import { useParams,Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ApiImage from '../../components/ApiImage';
import ProgressBar from '../../components/ProgressBar';

const queryClient = new QueryClient();

const fetchData = async (postid) => {
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const response = await fetch('https://api.theorcasocial.com/v1/markets/' + postid
    , requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const GreenBusinessessShow = () => {
    const params = useParams();
    const postid = params.postid;
    const { data, isLoading, error } = useQuery(['data', 'GreenBusinessessShow',postid], () => fetchData(postid));

    return (
        <>
            <ProgressBar />
            <main id='main-posts' className='!bg-white'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-[7rem]'  src={amazonelogo} />
                    </div>

                    <div>
                        <div className='text-[20px] font-semibold'>
                            <h2>{data?.data.title}</h2>
                        </div>

                        <div className='text-[#525252]'>
                            <p>{data?.data.sub_title}</p>
                        </div>
                    </div>
                </div>

                <div className='content my-[1rem] text-justify'>
                    <div dangerouslySetInnerHTML={{ __html : data?.data.body }}>
                        
                    </div>

                    <Swiper
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        navigation={{ 
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        loop={true}
                        spaceBetween={20}
                    >
                        {data?.data?.media.map((item) => (
                            <SwiperSlide key={Math.random()}>
                                <ApiImage path={item?.original} clas='w-full rounded-[1rem]' disk={item?.disk}  />
                            </SwiperSlide>
                        ))}

                        <div className='slider-news-post'>
                            <div>
                                <div className='swiper-button-prev' />
                                <div className='swiper-pagination' />
                                <div className='swiper-button-next' />
                            </div>
                        </div>
                    </Swiper>
                </div>

                {(data?.data.url) ? (
                    <div>
                        <Link to={data?.data.url} className='bg-[#F5F5F5] w-full flex justify-center rounded-full cursor-pointer py-[1rem]'>
                            <span className='font-medium'>Open website</span>

                            <svg className='ml-[0.5rem]' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5846 6.05298L5.41797 15.2196M7.28888 5.42798H14.3763C14.8365 5.42798 15.2096 5.80107 15.2096 6.26131V14.1745" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                ) : (
                    <div></div>
                )}
            </main>
        </>
    );
};

export default GreenBusinessessShow;