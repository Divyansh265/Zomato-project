import React from 'react'


//components
import DiningCarousal from './DiningCarousal'
const Dining = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
                Collection</h1>
            <DiningCarousal />
        </div>
    )
}

export default Dining