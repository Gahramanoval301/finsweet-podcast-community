"use client"
import React from 'react'
import LogoSwiper from './LogoSwiper'
import { navLinks } from '../data/navLinks'
import Link from 'next/link'

export default function Footer() {

    return (
        <footer className='relative bg-common-black bottom-0 w-full'>
            <div className='min-[500px]:h-[26rem] max-[500px]:h-[21rem]'>
                <div className='h-36 sm:h-40 md:h-48 bg-primary relative sm: -top-[30%] w-4/5 mx-auto py-4 md:py-12 flex flex-col justofy-center items-center gap-3 sm:gap-5 lg:gap-8 rounded-sm'>
                    <h2 className='text-lg sm:text-3xl font-semibold capitalize '>Our sponsors</h2>
                    <div className='block sm:hidden w-[100%]'>
                        <LogoSwiper />
                    </div>
                    <div className='hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 opacity-80  place-items-center w-full'>
                        <img className='w-36' src="/footer/Logo1.svg" alt="Logo1" />
                        <img className='w-36' src="/footer/Logo2.svg" alt="Logo2" />
                        <img className='w-36' src="/footer/Logo3.svg" alt="Logo3" />
                        <img className='w-36' src="/footer/Logo4.svg" alt="Logo4" />
                        <img className='w-36' src="/footer/Logo5.svg" alt="Logo5" />
                    </div>
                </div>
                <div className='grid grid-cols-2 min-[500px]:grid-cols-3 max-[500px]:gap-3 md:grid-cols-4 container mx-auto -translate-y-[30%]  px-4 place-items-center items-start '>
                    <div>
                        <img className='w-28 min-[500px]:w-40' src="/footer/Logo.svg" alt="Finsweet logo" />
                    </div>
                    <div>
                        <h1 className='footer-header'>Pages</h1>
                        <ul className='logo-list '>
                            {navLinks.map((link, index) => {
                                return (index <= 4 && <Link key={link ? link.name : ''} href={link ? link.href : ""}>{link ? link.name : ''}</Link>
                                )
                            })}

                        </ul>
                    </div>
                    <div>
                        <h1 className='footer-header'>Reach Us</h1>
                        <ul className='logo-list '>
                            {navLinks.map((link, index) => {
                                return (index > 4 && <Link key={link?.name} href={link ? link.href : ''}>{link?.name}</Link>
                                )
                            })}
                        </ul>

                    </div>
                    <div>
                        <h1 className='footer-header px-4'>Subscribe</h1>
                        <ul className='logo-list'>
                            <li className='flex gap-2 '>
                                <img src="/footer/Icon.svg" alt="Apple Podcast" />
                                <a className='opacity-100'>Apple Podcast</a>
                            </li>
                            <li className='flex gap-2 '>
                                <img src="/footer/Lines.svg" alt="Google Podcast" />
                                <a className='opacity-100'>Google Podcast</a>
                            </li>
                            <li className='flex gap-2 '>
                                <img src="/footer/Cloud.svg" alt="Soundcloud" />
                                <a className='font-semibold opacity-100'>SOUNDCLOUD</a>
                            </li>
                            <li className='flex gap-2 '>
                                <img src="/footer/Vector.svg" alt="Spotify" />
                                <a className='font-bold opacity-100'>Spotify</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-primary text-center font-normal sm:text-base h-[2rem] sm:h-[3rem] text-[12px] flex justify-center items-center sm:font-semibold'>© Copyright Finsweet 2021 - Gahramanova Laman</div>
        </footer>
    )
}
