import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes =[
        {id:1, name: 'Home', link:'./home'},
        {id:2, name: 'Shop', link:'./Shop'},
        {id:3, name: 'Deals', link:'./deals'},
        {id:4, name: 'Cupones', link:'./cupones'},
        {id:5, name: 'Conatct', link:'./contact'}
    ]
    return (
        <nav className='bg-indigo-200'>
            <div className='w-6 h-6 md:hidden' onClick={()=> setOpen(!open)}>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static duration-500 ease-in bg-indigo-200 w-full ${open ? 'top-6' : 'top-[-150px]'}`}>
                {
                    routes.map(route => <Navigation key={route.id} route={route}></Navigation>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;