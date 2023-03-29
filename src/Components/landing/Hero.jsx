import React from 'react'
import SearchBar from '../searchbar/searchbar'



const Hero = () => {
    return (
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Everything you need whilst travelling</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Events, Concerts, Restaurants</h1>
                    <p className='text-2xl'>And so much more</p>
                </div>
                <div>
                    <img className='w-full' src="https://source.unsplash.com/1600x900/?landscape" alt="/" />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Hero