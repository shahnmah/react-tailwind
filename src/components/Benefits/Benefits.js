import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benefits = ({benefit}) => {
    return (
        <div>
            <p className='flex items-center'><CheckCircleIcon className='w-5 h-5 pr-1 text-green-500'></CheckCircleIcon>
                {benefit}
            </p>
        </div>
    );
};

export default Benefits;