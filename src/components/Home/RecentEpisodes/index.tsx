import MainEpisodes from '@/components/MainEpisodes'
import React from 'react'
import Link from 'next/link'

export default function RecentEpisodes() {
    return (
        <section className='home-recent-episodes py-10 xl:px-20 lg:px-10 md:px-8   '>
            <div className='flex flex-col gap-4 justify-start items-start mb-10'>
                <h2 className='text-xl font-bold sm:text-2xl lg:font-extrabold lg:text-3xl'>Recent Episodes</h2>
                <p className='sm:w-2/5 antialiased text-sm break-words lg:tracking-wide lg:leading-7'>
                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
                </p>
                <button className='btn self-end'><Link href=''>See All Episodes</Link></button>
            </div>
            <div>
                <MainEpisodes />
            </div>
        </section>
    )
}
