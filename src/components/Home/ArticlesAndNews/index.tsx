import React from 'react'
import { articles_news } from '@/data/articlesNews'
import Link from 'next/link'

export default function ArticlesAndNews() {
    return (
        <section className='md:px-10 py-10 md:py-16  lg:px-20 relative '>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-1 lg:gap-3  max-[768px]:place-content-center max-[768px]:place-items-center'>
                <Link href='' className='overflow-hidden relative bg-common-light px-2 md:p-4 lg:p-8 xl:p-12 hover:cursor-pointer max-[768px]:w-[400px] max-[450px]:w-[320px]'>
                    <h3 className=' xl:w-9/12 text-common-black font-bold tracking-normal text-xl lg:text-2xl md:font-extrabold md:tracking-wide max-[500px]:text-center relative z-10'>Read our articles & news</h3>
                    <span className='block my-3 font-bold text-primary relative z-10'>See More</span>
                    <img src="/ArticlesNews/MaskGroup.svg" alt="Mask Group" className='absolute bottom-0 left-0 ' />
                </Link>
                {articles_news
                    .sort((a, b) => new Date(b.producing_time) - new Date(a.producing_time)) // Sort episodes by producing time
                    .slice(0, 2) // Get the three newest episodes
                    .map(({ id, title, description, image }) => (
                        <Link href='' key={id} className='flex flex-col gap-5 px-1 lg:px-2 xl:px-3 mb-1 lg:mb-2 xl:pb-3 hover:bg-common-light transition hover:scale-105 hover:shadow-md hover:cursor-pointer max-[768px]:w-[400px] max-[450px]:w-[320px]'>
                            <img src={image} alt={title} />
                            <h4 className='line-clamp-2 tracking-tighter sm:tracking-tighter lg:tracking-normal text-lg font-semibold lg:text-xl 2xl:text-2xl'>{title}</h4>
                            <p className='antialiased text-sm lg:text-base break-words tracking-tight lg:tracking-wide lg:leading-7'>{description}</p>
                            <span className='font-bold text-primary '>Read Now</span>
                        </Link>
                    ))}

            </div>
        </section>
    )
}
