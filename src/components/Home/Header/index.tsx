import React from 'react'

export default function HeaderH() {
    return (
        <section className='lg:py-32 sm:py-16 md:px-10 py-10 px-4 lg:px-20 gap-8 md:gap-16 grid grid-cols-1 sm:grid-cols-2 '>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold sm:text-2xl lg:font-extrabold lg:text-3xl'>Become The Hero Of Your Own Story</h2>
                <p className='antialiased text-sm break-words lg:tracking-wide lg:leading-7'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <div className='bg-primary '>
                    <input className='antialiased w-7/12 text-sm md:text-base bg-common-light placeholder:text-common-grey py-2 px-3 lg:py-3 lg:px-6 outline-none' type="text" id='emailId' name='emailId' placeholder='Enter Your Email Id' />
                    <button className='btn text-white antialiased tracking-wide font-bold text-sm w-5/12  py-2 px-3 lg:px-6 lg:py-3'>Subscribe</button>
                </div>
            </div>
            <div className='mx-auto w-4/5'>
                <img src='/Home/Audiotrack.svg' alt='Audio track'/>
            </div>
        </section>
    )
}
