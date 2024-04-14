import MainEpisodes from '@/components/MainEpisodes'
import React from 'react'
import Link from 'next/link'

export default function RecentEpisodes() {
    return (
        <section className='home-recent-episodes section-space  '>
            <div className='flex flex-col gap-4 justify-start items-start mb-10'>
                <h2 className='head-text'>Recent Episodes</h2>
                <p className='sm:w-2/5 content'>
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
