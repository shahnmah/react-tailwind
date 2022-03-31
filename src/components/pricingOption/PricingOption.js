import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = ({options}) => {
    const {name, price, benefits} = options;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl font-bold text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
                }
                <button className='bg-green-500 text-base text-white font-bold py-2 px-4 rounded
                flex w-full justify-center items-center'>
                    Buy Now
                    <ArrowRightIcon className='w-4 h-4 ml-2'></ArrowRightIcon>
                </button>
            </div>
        </div>
    );
};

export default PricingOption;