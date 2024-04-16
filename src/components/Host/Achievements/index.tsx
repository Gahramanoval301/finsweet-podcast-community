import React from 'react'

export default function Achievements() {
    return (
        <section className='section-space grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-[640px]:place-items-center '>
            <div className='sm:translate-y-16 achievement-card'>
                <img src="/Host/Icon1.svg" alt="icon1" />
                <div className='achievement-content'>
                    <span className='achievement-count'>500+</span>
                    <h3 className='achievement-header'>Podcasts</h3>
                </div>
            </div>
            <div className='sm:-translate-y-8 achievement-card'>
                <img src="/Host/Icon2.svg" alt="icon2" />
                <div className='achievement-content'>
                    <span className='achievement-count'>24M</span>
                    <h3 className='achievement-header'>Views</h3>
                </div>
            </div>
            <div className='sm:translate-y-16 achievement-card'>
                <img src="/Host/Icon3.svg" alt="icon3" />
                <div className='achievement-content'>
                    <span className='achievement-count'>600K</span>
                    <h3 className='achievement-header'>Subscribers</h3>
                </div>
            </div>
            <div className='sm:-translate-y-8 achievement-card'>
                <img src="/Host/Icon4.svg" alt="icon4" />
                <div className='achievement-content'>
                    <span className='achievement-count'>100K+</span>
                    <h3 className='achievement-header'>Messages</h3>
                </div>
            </div>
           

        </section>
    )
}
