import React from 'react';
import orca_logo from './../images/orca-logo.png';

const Header = () => {
    return (
        <>
            <header id='header-main' className='hide-pc'>
                <div className='h-[50px]'>
                    <img className='h-full' src={orca_logo} />
                </div>
            </header>
        </>
    );
};

export default Header;