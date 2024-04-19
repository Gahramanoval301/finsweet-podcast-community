import React from "react";

export default function CTA() {
  return (
    <section className='bg-no-repeat bg-center  bg-[url("/Host/CTABackground.png")]  bg-cover flex items-center bg-primary scale-[1.032] lg:scale-[1.022] my-16 md:mt-36 md:px-16 px-8 max-[450px]:px-5 lg:px-36 py-20 max-[450px]:py-12 h-[400px] lg:h-[600px]'>
      <div className="text-white host-content-box items-start sm:w-3/5 ">
        <h2 className="head-text lg:text-[2.5rem]">
          Become The Hero Of Your Own Story
        </h2> 
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
          lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat
          ut netus malesuada enim penatibus non aliquet.
        </p>
        <button className="border-2 btn border-white bg-transparent">
          Contact us
        </button>
      </div>
    </section>
  );
}
