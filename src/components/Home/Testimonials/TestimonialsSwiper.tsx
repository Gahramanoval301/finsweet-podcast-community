'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { TestimonialSlides } from './TestimonialSlides';

export default function TestimonialSwiper() {
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className=' relative  '>
            <div className='gap-2 sm:gap-5  flex flex-row absolute z-50 right-0  -top-[35%]' >
                <button ref={prevRef} className='w-8 h-8 sm:w-12 sm:h-12 rounded-[50%] bg-primary flex justify-center items-center'>
                    <img src="/Testimonials/ArrowLeft.svg" alt="arrow-left" />
                </button>
                <button ref={nextRef} className=' w-8 h-8 sm:w-12 sm:h-12 rounded-[50%] bg-primary flex justify-center items-center'>
                    <img src="/Testimonials/ArrowRight.svg" alt="arrow-right" />
                </button>
            </div>
            <Swiper style={{ marginBottom: 20 }}
                // scrollbar={{ draggable: true }} // Enable scrollbar with draggable option
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    1000: {
                        slidesPerView: 3
                    }

                }}
                slidesPerView={1}

                loop
                onInit={() => setInit(true)}

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                mousewheel={true}
                modules={[Navigation, Scrollbar, Mousewheel, Autoplay]} //AutoPlay will be added later
                className="mySwiper"
                spaceBetween={30}
            >
                {TestimonialSlides}
            </Swiper>
        </div>
    );
}