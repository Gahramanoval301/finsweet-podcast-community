import React from 'react'

export default function DreamSection() {
    return (
        <section className='section-space grid grid-cols-1 sm:grid-cols-2 '>
            <div className='relative'>
                <h2 className='head-text'>
                    A small story about a big dream  —
                </h2>
                <p className='content'>
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to twinkle.
                    By the same illusion which lifts the horizon
                </p>
                <p className='content font-bold'>
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and
                </p>
                <img className='absolute bottom-0 right-0' src="/purpleLine.svg" alt="long green line" />

            </div>
            <div className='relative'>
            <img  src="/Host/man-wearing-a-puffer-jacket-6878718.png" alt="man-wearing-a-puffer-jacket" />
            <img className='absolute bottom-0 left-0' src="/Host/Wave.svg" alt="wave" />

            </div>
        </section>
    )
}
