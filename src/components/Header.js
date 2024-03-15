import React from 'react';
import LogoOrca from './../images/orca-logo.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    
    return (
        <>
            <header id='header-home'>
                <ul>
                    <li className='h-full !mr-[1.5rem]'>
                        <Link className='h-full' to={'/'}>
                            <img className='h-full mt-[-0.5rem]' src={LogoOrca} />
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <span className={(location.pathname == '/') ? 'active-menu' : ''}>About Us</span>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <span>Awareness</span>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <span>Green Businesses</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/news'}>
                            <span className={(location.pathname == '/news') ? 'active-menu' : ''}>News</span>
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;