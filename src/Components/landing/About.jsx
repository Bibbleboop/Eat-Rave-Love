import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Used by nomads across the world</h2>
                    <p className='text-3xl py-6 text-gray-500'>An all powerful app that can be used to look for events, clubs, concerts, raves, brunch, hunover food and everything in between. We guarantee you'll love life after using it </p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-md shadow-sky-600' >
                        <p className='text-6xl font-bold text-sky-600'>text</p>
                        <p className='text-gray-400 mt-2'>text</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-md shadow-sky-600' >
                        <p className='text-6xl font-bold text-sky-600'>text</p>
                        <p className='text-gray-400 mt-2'>text</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-md shadow-sky-600' >
                        <p className='text-6xl font-bold text-sky-600'>text</p>
                        <p className='text-gray-400 mt-2'>text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About