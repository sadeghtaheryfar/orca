import React from 'react';
import { Link } from 'react-router-dom';
const News = () => {
    return (
        <div>
            <main className='pt-[7rem] pb-[1.5rem] px-[1.5rem]'>
                <section>
                    <div>
                        <div>
                            <span>MAR.11.2024</span>
                        </div>

                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                        <div>
                            <Link to='/'> 
                                Read More 

                                <svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828">
                                    <path id="source_icons_nav-arrow-down" d="M6,9l6,6,6-6" transform="translate(16 -4.586) rotate(90)" fill="none" stroke="#808191" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default News;