import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-cyan-950'>Used by nomads across the world!</h2>
                    <p className='text-3xl py-6 text-gray-500'>An all powerful app that can be used to look for events, clubs, concerts, raves, brunch, food and everything in between. We guarantee you'll love life after using it </p>
                </div>

                <div className='grid md:grid-cols-3 gap-5 text-center'>
                    <div className='rounded-xl shadow-cyan-950' >
                        <img src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Party' />
                    </div>
                    <div className='rounded-xl shadow-cyan-950' >
                        <img src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Restaurant' />
                    </div>
                    <div className='rounded-xl shadow-cyan-950' >
                        <img src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Concert' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
