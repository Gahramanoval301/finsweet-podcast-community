import React from 'react'

export default function HeaderH() {
    return (
        <section className='lg:py-32 sm:py-16 md:px-10 py-10 px-4 lg:px-20 gap-8 md:gap-16 grid grid-cols-1 sm:grid-cols-2 '>
            <div className='flex flex-col gap-6'>
                <h2 className='head-text'>Become The Hero Of Your Own Story</h2>
                <p className='content'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <div className='bg-primary '>
                    <input className='input-text ' type="text" id='emailId' name='emailId' placeholder='Enter Your Email Id' />
                    <button className='btn btn-next-input '>Subscribe</button>
                </div>
            </div>
            <div className='mx-auto w-4/5'>
                <img src='/Home/Audiotrack.svg' alt='Audio track'/>
            </div>
        </section>
    )
}
