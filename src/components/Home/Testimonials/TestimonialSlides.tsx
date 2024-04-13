'use client'
import { SwiperSlide } from 'swiper/react';
import { testimonials } from '@/data/testimonials';

export const TestimonialSlides = testimonials.map(({ id, fullName, stars, comment, image }) => {
    const starImages = []
    for (let i = 0; i < stars; i++) {
        starImages.push(<img src='/Testimonials/Star.svg' alt="star" />)
    }
    return <SwiperSlide style={{
    }} key={id} >
        <div className='flex flex-col gap-4 border-b-[1rem] border-b-primary min-h-[19rem] '>
            <div className='flex gap-4 items-center'>
                <div className='w-[80px] h-80px rounded-[50%] border-2 overflow-hidden'>
                    <img src={image} alt={fullName} />
                </div>
                <div className='flex flex-col gap-2  '>
                    <h5 className='font-semibold capitalize text-base md:text-md'>
                        {fullName}
                    </h5>
                    {/*funksionalliq qurmalisan*/}
                    <div className='stars flex gap-1'>
                        {starImages}
                    </div>
                </div>
            </div>
            <p className='antialiased text-[15px] break-words tracking-tight xl:tracking-wide leading-6 xl:leading-7'>
                {comment}
            </p>
        </div>
    </SwiperSlide >

})