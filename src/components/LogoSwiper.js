'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';

export default function LogoSwiper() {
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className=' relative  '>
            <Swiper className='my-3'
                // scrollbar={{ draggable: true }} // Enable scrollbar with draggable option
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    500: {
                        slidesPerView: 2
                    },
                }}
                slidesPerView={1}

                loop
                onInit={() => setInit(true)}

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                mousewheel={true}
                modules={[Navigation, Scrollbar, Autoplay]} //AutoPlay will be added later
                spaceBetween={30}
            >
                <SwiperSlide className=' '>
                    <img src="/footer/Logo1.svg" alt="Logo1" className='scale-110 w-36 mx-auto '/>
                </SwiperSlide >
                <SwiperSlide className=' '>
                    <img src="/footer/Logo2.svg" alt="Logo2" className='scale-110 w-36 mx-auto ' />
                </SwiperSlide >
                <SwiperSlide className=' '>
                    <img src="/footer/Logo3.svg" alt="Logo3" className='scale-110 w-36 mx-auto '/>
                </SwiperSlide >
                <SwiperSlide className=' '>
                    <img src="/footer/Logo4.svg" alt="Logo4" className='scale-110 w-36 mx-auto '/>
                </SwiperSlide >
                <SwiperSlide className=' '>
                    <img src="/footer/Logo5.svg" alt="Logo5" className='scale-110 w-36 mx-auto ' />
                </SwiperSlide >
            </Swiper>
        </div>
    );
}