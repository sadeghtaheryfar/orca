import React from 'react';
import orca_logo from './../images/orca-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header id='header-main' className='hide-pc'>
                <div className='h-[50px]'>
                    <Link to='/'>
                        <img className='h-full' src={orca_logo} />
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Header;