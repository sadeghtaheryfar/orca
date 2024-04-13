import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazonelogo from './../../images/amazonelogo.png';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useInfiniteQuery } from 'react-query';
import ProgressBar from '../../components/ProgressBar';

const queryClient = new QueryClient();

const fetchData = async (key, page = 1,q = "",topic) => {
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    let topicU = "";

    if(topic && topic != "all")
    {
        console.log('>>>>>>>>>>>', 'hi')
        topicU = '&topics[0]=' + topic;
    }

    const response = await fetch('https://api.theorcasocial.com/v1/markets?per_page=10&page=' + page + '&q=' + q + topicU, requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const fetchTopic = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const response = await fetch('https://api.theorcasocial.com/v1/topics', requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const GreenBusinesses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [tocpId, settocpId] = useState('');
    const [bottomReached, setBottomReached] = useState(false);
    const { data, fetchNextPage,refetch, hasNextPage, isLoading, isError, error } = useInfiniteQuery(
    ['page','q','data','GreenBusinesses','topic'],
    ({ pageParam = 1 }) => fetchData('page', pageParam, searchTerm,tocpId),
        {
        getNextPageParam: (lastPage, allPages) => {
            return (lastPage.meta.current_page == lastPage.meta.last_page) ? null : lastPage.meta.current_page + 1; // Assuming the response has a "nextPage" property
        },
        }
    );
    const { data : Topic, isLoadingTopic, errorTopic } = useQuery(['Topic','AwarnesTopic'], fetchTopic);

    useEffect(() => {
        refetch(1);
    }, [searchTerm]);

    const topicHandel = (e,item) => {
        const btns = document.querySelectorAll('.btn-topic');
        btns.forEach((btn,index) => {
            btn.classList.remove('bg-[#3D42DF]');
            btn.classList.remove('text-white');
        });

        item.target.classList.add('bg-[#3D42DF]');
        item.target.classList.add('text-white');
        
        settocpId(e);
        if(e == tocpId){
            settocpId('all');
            const btns = document.querySelectorAll('.btn-topic');
            btns.forEach((btn,index) => {
                btn.classList.remove('bg-[#3D42DF]');
                btn.classList.remove('text-white');
            });
        }
    }

    useEffect(() => {
        refetch(1);
    }, [tocpId]);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const isBottom = scrollTop + clientHeight >= scrollHeight;
        setBottomReached(isBottom);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (bottomReached && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [bottomReached, fetchNextPage, hasNextPage, isLoading]);

    return (
        <>
            <ProgressBar />
            
            <main id='main-posts'>
                <div className='hide-mobile mb-[2rem]'>
                    <h2 className='font-semibold text-[28px]'>Green Businesses</h2>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {data?.pages.map(pageData => (
                        <React.Fragment key={Math.random()}>
                            {pageData.data.map(data => (
                                <Link key={Math.random()} to={'/greenBusinesses/' + data?.id} className='border border-[#E6E6E6] rounded-[12px] p-[0.5rem] flex flex-col justify-center bg-white'>
                                    <div>
                                        <h6 className='text-[14px] font-semibold'>{data?.title}</h6>
                                    </div>

                                    <div className='mt-[0.2rem] mb-[0.8rem]'>
                                        <p className='text-[12px] text-[#525252]'>{data?.sub_title}</p>
                                    </div>

                                    <div>
                                        <img className='w-full' src={data?.logo} />
                                    </div>
                                </Link>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </main>
        </>
    );
};

export default GreenBusinesses;