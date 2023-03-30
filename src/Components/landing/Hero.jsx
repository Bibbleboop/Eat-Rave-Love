import React from 'react'

const Hero = () => {
    return (
        <div name='home' style={{ backgroundImage:`url("https://source.unsplash.com/1600x900/?party")`,backgroundRepeat:"no-repeat", backgroundSize:"100%", opacity:".9"}}className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2x text-slate-200'>Everything you need whilst travelling</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-slate-200'>Events, Concerts, Restaurants</h1>
                    <p className='text-2xl text-slate-200'>And so much more</p>
                </div>

            </div>
        </div>
    )
}

export default Hero