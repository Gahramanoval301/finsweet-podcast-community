import React from 'react'
import TestimonialSwiper from './TestimonialsSwiper'

export default function Testimonials() {
    return (
        <section className='py-10 xl:px-20 lg:px-10 md:px-8'>
            <div>
                <h1>What our listeners say</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mus cras lacus tellus morbi viverra suspendisse ornare.
                    Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                </p>
                <div>
                    <TestimonialSwiper />
                </div>
            </div>
        </section>
    )
}
