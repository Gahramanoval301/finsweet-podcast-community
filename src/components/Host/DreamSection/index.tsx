import React from 'react'

export default function DreamSection() {
    return (
        <section className='section-space grid-box gap-5 sm:gap-8 '>
            <div className='host-content-box justify-center'>
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
                <img className='absolute -top-10 sm:top-0 lg:bottom-20 right-5' src="/purpleLine.svg" alt="long green line" />

            </div>
            <div className='relative'>
            <img  src="/Host/man-wearing-a-puffer-jacket-6878718.png" alt="man-wearing-a-puffer-jacket" />
            <img className='absolute -bottom-12 -left-14 md:-left-20 lg:-left-16 scale-[0.75] lg:scale-[0.85] xl:scale-100' src="/Host/Wave.svg" alt="wave" />

            </div>
        </section>
    )
}
