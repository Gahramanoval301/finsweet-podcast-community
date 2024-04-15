import React from 'react'

export default function HeaderHost() {
    return (
        <section className=' lg:py-32 sm:py-16 md:px-10 py-10 px-4 lg:px-20 gap-8 grid grid-cols-1 sm:grid-cols-2 '>
            <div className='relative'>
                <img src="/Host/Image.png" alt="man within microphone logo" />
                <img className='absolute bottom-10 left-20' src="/greenbLine.svg" alt="small bold green line" />
                <img className='absolute top-20 left-0' src="/purplebLine.svg" alt="small bold purple line" />
            </div>
            <div className='relative'>
                <span className='uppercase text-primary tracking-wide antialiased leading-7'>About the host</span>
                <h2 className='head-text'>
                    Hey there, I’m Andrew Jonson and welcome to my Podcast
                </h2>
                <p className='content'>
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to twinkle.
                </p>
                <button className='btn'>Know More</button>
                <img className='absolute bottom-0 right-0' src="/greenLine.svg" alt="long green line" />
            </div>
        </section>
    )
}
