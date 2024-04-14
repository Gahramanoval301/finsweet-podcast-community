import React from 'react'
import TestimonialSwiper from './TestimonialsSwiper'

export default function Testimonials() {
    return (
        <section className='section-space  relative section-space'>
            <div className='flex flex-col gap-4'>
                <h2 className='head-text'>What our listeners say</h2>
                <p className='w-4/6 md:w-3/6 content'>
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
