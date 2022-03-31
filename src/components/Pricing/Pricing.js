import React from 'react';
import PricingOption from '../pricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0 , benefits: [
            'lifetime free',
            'unlimited deals',
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        { id: 2, name: 'Regular', price: 9.99, benefits: [
            'everything on free',
            'unlimited deals',
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        { id: 3, name: 'Premium', price: 19.99, benefits: [
            'everything on regular',
            'unlimited deals',
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]}
    ]
    return (
        <div className='bg-indigo-400 p-6'>
            <h2 className='text-3xl my-8 font-serif text-white'>Best Deals in the Town</h2>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(options => <PricingOption 
                    key={options.id}
                    options={options}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;