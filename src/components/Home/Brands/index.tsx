import React from 'react'

export default function Brands() {
    return (
        <section className='brands pb-10 '>
            <div className='grid  max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-5 place-content-center place-items-center gap-y-2'>
                <h3 className='font-bold antialiased  tracking-tight breakd-words'>Podcast Avaliable On</h3>
                <li className='flex gap-2 items-center '>
                    <img src="/footer/Icon.svg" alt="Apple Podcast" />
                    <a className='opacity-100'>Apple Podcast</a>
                </li>
                <li className='flex gap-2 items-center '>
                    <img src="/footer/Lines.svg" alt="Google Podcast" />
                    <a className='opacity-100'>Google Podcast</a>
                </li>
                <li className='flex gap-2 items-center '>
                    <img src="/footer/Cloud.svg" alt="Soundcloud" />
                    <a className='font-semibold opacity-100'>SOUNDCLOUD</a>
                </li>
                <li className='flex gap-2 items-center max-[768px]:col-start-1 max-[768px]:col-end-3 max-[400px]:col-start-1 max-[400px]:col-end-1  '>
                    <img src="/footer/Vector.svg" alt="Spotify" />
                    <a className='font-bold opacity-100'>Spotify</a>
                </li>
            </div>

        </section>
    )
}
