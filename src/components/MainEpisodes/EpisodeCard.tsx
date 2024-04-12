import React from 'react'

export default function EpisodeCard({ image, title, description, producing_time }: { image: string, title: string, description: string, producing_time: string }) {

    return (
        <div className='mt-3 flex flex-col gap-3 p-1 lg:p-2 xl:p-3 hover:bg-common-light transition hover:scale-105 hover:shadow-md hover:cursor-pointer'>
            <div className='relative '>
                <img className='border-2  w-full' src={image} alt={title} />
                <div className='absolute bg-primary rounded-[50%] w-8 h-8 flex justify-center items-center top-3 right-3'>
                    <img src="/Home/microphone.svg" alt="Microphone" />
                </div>
            </div>
            <h3 className='tracking-tighter sm:tracking-tighter lg:tracking-normal text-lg font-semibold lg:text-xl 2xl:text-2xl'>{title} </h3>
            <p className='antialiased text-sm lg:text-base break-words tracking-tight lg:tracking-wide lg:leading-7'>{description}</p>
            <div className='flex gap-3'>
                <div className='bg-primary rounded-[50%] w-7 h-7 flex justify-center items-center'>
                    <img src="/Home/Triangle.svg" alt="microphone icon" />
                </div>
                <p>Listen Now</p>
            </div>
        </div>
    )
}
