"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { navLinks } from '../data/navLinks'
import Link from 'next/link'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const isActive = null;
    const pathname = usePathname()
    function handleClick() {
        setIsOpen(!isOpen)
        console.log(pathname);

    }

    return (
        <header className='bg-white z-50 border-2  h-[4.5rem] flex justify-between items-center w-full fixed px-4 md:px-6 lg:px-10'>
            <div>
                <img src="./Logo.svg" alt="Finsweet logo" />
            </div>
            <div className='relative sm:hidden'>
                <span className='cursor-pointer' onClick={handleClick}>Dropdown btn</span>
                {isOpen &&
                    <ul className='absolute divide-y-2 divide-primary w-full z-20 '>
                        <li className='dropdown-item'><a href="">Podcasts</a></li>
                        <li className='dropdown-item'><a href="">Host</a></li>
                        <li className='dropdown-item'><a href="">About</a></li>
                        <li className='dropdown-item'><a href="">Blog</a></li>
                        <li className='dropdown-item'><a href="">Contact</a></li>
                    </ul>
                }
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
                        <li>
                            <a href="">
                                <img src="/Facebook.svg" alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/LinkedIn.svg" alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/Instagram.svg" alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
