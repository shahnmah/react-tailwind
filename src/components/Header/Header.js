import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl py-4'>Welcome to Pricing Club</h2>
        </div>
    );
};

export default Header;