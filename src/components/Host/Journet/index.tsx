import React from 'react'

export default function Journey() {
    return (
        <section className='grid-box relative section-space my-10 gap-8 md:gap-10 lg:gap-16  sm:p-8 md:p-14 lg:p-20'>
            <div className='host-content-box'>
                <h2 className='head-text'>
                    My origins on YouTube in 2008
                </h2>
                <p className='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo.
                    Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat, habitasse non nisl
                </p>
                <p className='content'>
                    <span className='content font-bold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare.
                    </span>
                    Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                </p>

            </div>
            <div className='host-content-box'>
                <h2 className='head-text'>
                    From tech journalist, to Vlogger and YouTuber
                </h2>
                <p className='content'>
                    <span className='content font-bold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare.
                    </span>
                    Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                </p>
                <p className='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo.
                    Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat, habitasse non nisl.
                </p>
                <p className='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies ame\
                </p>

            </div>
            <img className='absolute -bottom-5 sm:bottom-10 left-20' src="/purplebLine.svg" alt="small bold purple line" />
            <img className='absolute bottom-0 right-0' src="/purpleLine.svg" alt="long purple line" />
            <img className='absolute top-0 left-0' src="/greenLine.svg" alt="long green line" />
        </section>
    )
}
