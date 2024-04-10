import React from 'react'

export default function Footer() {
    return (
        <footer className='absolute bg-red-500 bottom-0 w-full'>
            <div className='h-80 '>
                <div className='h-48 bg-primary relative -top-[45%] w-4/5 mx-auto'>
                    <h2>Our sponsors</h2>
                    <div className='grid grid-cols-5'>
                        <img src="/footer/Logo1.svg" alt="Logo1" />
                        <img src="/footer/Logo2.svg" alt="Logo2" />
                        <img src="/footer/Logo3.svg" alt="Logo3" />
                        <img src="/footer/Logo4.svg" alt="Logo4" />
                        <img src="/footer/Logo5.svg" alt="Logo5" />
                    </div>
                </div>
                footer
            </div>
            <div className='bg-primary h-[3rem] flex justify-center items-center font-semibold'>© Copyright Finsweet 2021 - Gahramanova Laman</div>
        </footer>
    )
}
