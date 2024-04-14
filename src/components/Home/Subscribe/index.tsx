import React from 'react'

export default function Subscribe() {
  return (
    <section className='md:px-10 py-10 md:py-16  lg:px-20 relative '>
      <div className='bg-primary py-24 lg:py-32 flex flex-col justify-center items-center gap-8  relative max-[500px]:px-4'>
        <h2 className='text-white font-bold tracking-normal text-xl md:text-2xl lg:text-3xl md:font-extrabold md:tracking-wide max-[500px]:text-center'>Receive new episodes in your inbox.</h2>
        <div className='bg-secondary-basic  sm:w-5/12 '>
          <input className='input-text' type="text" id='email' name='email' placeholder='Enter Your Email' />
          <button className='btn bg-secondary-basic btn-next-input'>Subscribe</button>
        </div>
        <img src="/Home/Wave.svg" alt="Wave" className='absolute bottom-0' />
        <div className='mic-l-box mic-lr-box lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 left-3 max-[640px]:top-5 xl:left-[10%] '>
          <img src="/Home/Vector2.svg" alt="microphone-left" className='scale-[0.7] md:scale-[0.8] lg:scale-100' />
        </div>
        <div className='mic-r-box mic-lr-box w-12 h-12 right-[10%] bottom-[30%] max-[640px]:bottom-5'>
          <img src="/Home/Vector3.svg" alt="microphone-right" />
        </div>
      </div>

    </section>
  )
}
