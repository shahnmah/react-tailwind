import React from 'react';

const Navigation = ({ route }) => {
    const { name, link } = route
    return (

        <li className='text-lg mr-12'><a href={link}>{name}</a></li>

    );
};

export default Navigation;