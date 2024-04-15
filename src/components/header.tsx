"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { navLinks } from '../data/navLinks'
import Link from 'next/link'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [dropdownHeight, setDropdownHeight] = useState(0);
    const isActive = null;
    const pathname = usePathname()
    function handleClick() {
        setIsOpen(!isOpen)
        setTimeout(() => {
            setDropdownHeight(isOpen ? 0 : 500);
        }, 100);

    }
    function handleClick2() {
        setIsClicked(!isClicked)
    }

    return (
        <header className='  bg-white z-50 border-2  h-[4.5rem] flex justify-between items-center w-full fixed px-4 md:px-6 lg:px-10'>
            <div>
                <img src="./Logo.svg" alt="Finsweet logo" />
            </div>
            <div className='flex gap-4'>
                <div className='relative sm:hidden border-2 '>
                    <span className='cursor-pointer' onClick={handleClick}> btn</span>
                    {isOpen &&
                        <ul className='dropdown-list rounded-lg -translate-x-[70%] absolute divide-y-2 divide-primary z-20 flex flex-col gap-2 max-h-0 bg-white mt-2 w-32 transition-all duration-700 ' style={{ maxHeight: dropdownHeight }} >
                            {navLinks.map((link) => {
                                const isActive = pathname.startsWith(link ? link.href : '')
                                return <Link href={link ? link.href : ''} key={link?.name} className={`${isActive ? 'text-primary' : 'black'} px-2 py-2 hover:text-secondary-basic hover:font-semibold transition`}>{link?.name}</Link>
                            })}
                        </ul>
                    }
                </div>
                <div className='relative sm:hidden border-2 '>
                    <span className='cursor-pointer' onClick={handleClick2}>btn</span>
                    {
                        // <ul className='dropdown-list rounded-lg -translate-x-[70%] absolute divide-y-2 divide-primary z-20 flex flex-col gap-2 max-h-0 bg-white mt-2 w-32 transition-all duration-700 ' style={{ maxHeight: dropdownHeight }} >
                        <ul className='absolute flex flex-col items-center gap-2 mt-2 w-12 -translate-x-[20%] bg-common-light rounded-md p-2 translate duration-300' style={{
                            opacity: isClicked ? 1 : 0,
                            transform: `translateX(-20%) translateY(${isClicked ? '0' : '-20px'})`
                        }}>
                            <li className='sc-icon-box'>
                                <Link href="" >
                                    <img src="/Facebook.svg" alt="Facebook" />
                                </Link>
                            </li>
                            <li className='sc-icon-box'>
                                <Link href="" >
                                    <img src="/LinkedIn.svg" alt="LinkedIn" />
                                </Link>
                            </li>
                            <li className='sc-icon-box'>
                                <Link href="" >
                                    <img src="/Instagram.svg" alt="Instagram" />
                                </Link>
                            </li>
                        </ul>
                        // </ul>
                    }
                </div>

            </div>

            <div className='sm:flex gap-5 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-28 hidden'>
                <nav>
                    <ul className='ul-items flex'>
                        {navLinks.map((link) => {
                            const isActive = pathname.startsWith(link ? link.href : '')
                            return <Link href={link ? link.href : ''} key={link?.name} className={isActive ? 'text-primary' : 'black'}>{link?.name}</Link>
                        })}
                    </ul>
                </nav>

                <div>
                    <ul className='ul-items'>
                        <li className='sc-icon-box'>
                            <Link href="">
                                <img src="/Facebook.svg" alt="Facebook" />
                            </Link>
                        </li>
                        <li className='sc-icon-box'>
                            <Link href="">
                                <img src="/LinkedIn.svg" alt="LinkedIn" />
                            </Link>
                        </li>
                        <li className='sc-icon-box'>
                            <Link href="">
                                <img src="/Instagram.svg" alt="Instagram" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
