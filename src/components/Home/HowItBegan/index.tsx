import React from 'react'

export default function HowItBegan() {
  return (
    <section className='lg:py-32 sm:py-16 relative pb-10 py-10 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16  '>
        <div className='max-[640px]:-translate-x-10'>
          <img className='sm:scale-125 md:scale-110 ' src="/Home/Left.svg" alt="man-with-microphone-paper-pencil" />
        </div>
        <div className='flex flex-col gap-6 justify-center'>
          <h2 className='head-text'>
            My origins on <span className='text-primary hover:text-secondary-basic duration-300'>YouTube</span> in 2008
          </h2>
          <p className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
          </p>
          <img className='right-10 bottom-0 sm:top-[10%] md:top-[20%] absolute' src="/Home/Line.svg" alt="Line" />
        </div>
    </section>
  )
}
