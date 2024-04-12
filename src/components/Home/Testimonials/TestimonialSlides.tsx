'use client'
import { SwiperSlide } from 'swiper/react';
import { testimonials } from '@/data/testimonials';

export const TestimonialSlides = testimonials.map(({ id, fullName, stars, comment }) => {
    return <SwiperSlide style={{
        backgroundImage: `url("")`,
        backgroundSize: `cover`,
        width: '100%',
    }} key={id}>
        <div >
            <div >
                <h3 className='text-red-600 md:w-3/5 xs:w-full font-bold capitalize text-lg md:text-2xl'>
                    {fullName}
                </h3>
                <div className='bg-white rounded-xl p-2 '>
                    <button className='btn'>
                        Daha Ətraflı
                    </button>
                </div>
            </div>
        </div>
    </SwiperSlide >

})