import { useState } from 'react';

export default function MiniSwiper() {
    const [currentLogo, setCurrentLogo] = useState(0);
    const logos = [
        '/footer/Logo1.svg',
        '/footer/Logo2.svg',
        '/footer/Logo3.svg',
        '/footer/Logo4.svg',
        '/footer/Logo5.svg',
    ];

    const handleNext = () => {
        setCurrentLogo((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentLogo((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform ease-in-out duration-300" style={{ transform: `translateX(-${currentLogo * (100 / (logos.length - 3.5))}%)` }}>
                
                    <div  className="w-full h-auto flex gap-[2rem] translate-x-12">
                        <img className="opacity-80 object-cover w-full" src={logos[0]} />
                        <img className="opacity-80 object-cover w-full" src={logos[1]} />
                        <img className="opacity-80 object-cover w-full" src={logos[2]} />
                        <img className="opacity-80 object-cover w-full" src={logos[3]} />
                        <img className="opacity-80 object-cover w-full" src={logos[4]} />
                        
                    </div>
                
            </div>
            <button className="prev absolute top-1/2 transform -translate-y-1/2 left-0" onClick={handlePrev}>&#10094;</button>
            <button className="next absolute top-1/2 transform -translate-y-1/2 right-0" onClick={handleNext}>&#10095;</button>
        </div>
    );
};
