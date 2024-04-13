import React from 'react'
import TestimonialSwiper from './TestimonialsSwiper'

export default function Testimonials() {
    return (
        <section className='py-10 xl:px-20 lg:px-10 md:px-8 relative'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-bold sm:text-2xl lg:font-extrabold lg:text-3xl'>What our listeners say</h2>
                <p className='w-4/6 md:w-3/6 antialiased text-sm break-words lg:tracking-wide lg:leading-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mus cras lacus tellus morbi viverra suspendisse ornare.
                    Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                </p>
                <div className='mt-5'>
                    <TestimonialSwiper />
                </div>
            </div>
        </section>
    )
}
