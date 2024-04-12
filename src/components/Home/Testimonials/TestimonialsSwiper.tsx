'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { TestimonialSlides } from './TestimonialSlides';

export default function TestimonialSwiper() {
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className='relative'>
            <div className='gap-2 flex flex-row absolute z-50 bottom-35 right-40'>
                <button ref={prevRef}>
                   left
                </button>
                <button ref={nextRef}>
                    right
                </button>
            </div>
            <Swiper
             scrollbar={{ draggable: true }} // Enable scrollbar with draggable option
             autoplay={{ delay: 3000 }} 
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    }

                }}
                slidesPerView={3}
                
                loop
                onInit={() => setInit(true)}
                pagination={{
                    type: "bullets",
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        return '<span style="background-color:#435072;width: 15px; height:15px;" class="' + className + '">' + (index + 1) + '</span>';
                    },
                    clickable: true
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Pagination, Navigation, Scrollbar, Autoplay]}
                className="mySwiper"
            >
                {TestimonialSlides}
            </Swiper>
        </div>
    );
}