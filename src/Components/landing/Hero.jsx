import React from 'react'



const Hero = () => {
    return (
        <div name='home' style={{ backgroundImage:`url("https://source.unsplash.com/1600x900/?party")`,backgroundRepeat:"no-repeat", backgroundSize:"100%", opacity:".9"}}className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-3xl text-cyan-950 shadow-3xl'>Everything you need whilst travelling</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-cyan-950'>Events, Concerts, Restaurants</h1>
                    <p className='text-3xl text-cyan-950 drop-shadow-2xl'>And so much more</p>
                </div>
            </div>
        </div>
    )
}

export default Hero