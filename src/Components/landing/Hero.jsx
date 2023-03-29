import React from 'react'
import SearchBar from '../searchbar/SearchBar'



const Hero = () => {
    return (
        <div name='home' style={{ backgroundImage:`url("https://source.unsplash.com/1600x900/?party")`,backgroundRepeat:"no-repeat", backgroundSize:"100%", opacity:".9"}}className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2x text-slate-200'>Everything you need whilst travelling</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-slate-200'>Events, Concerts, Restaurants</h1>
                    <p className='text-2xl text-slate-200'>And so much more</p>
                </div>
                <div className='absolute flex flex-col py-2 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-sky-500 rounded-xl text-center shadow-xl shadow-sky-800'>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Hero