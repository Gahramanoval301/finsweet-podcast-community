import Image from "next/image";
import React from "react";

export default function HeaderHost() {
  return (
    <section className=" lg:py-26 sm:py-16 md:px-10 py-10 px-4 lg:px-20 gap-8 grid-box ">
      <div className="relative flex justify-center sm:justify-end">
        <Image src="/Host/Image.png" alt="man within microphone logo" />
        <Image
          className="absolute bottom-10 lg:bottom-[30%] left-5 lg:left-20"
          src="/greenbLine.svg"
          alt="small bold green line"
        />
        <Image
          className="absolute top-20 left-[10%] lg:left-[25%]"
          src="/purplebLine.svg"
          alt="small bold purple line"
        />
      </div>
      <div className="host-content-box md:gap-8 justify-start items-start md:py-16 lg:4/5 xl:w-3/5">
        <span className="uppercase text-primary tracking-wide antialiased leading-7 hover:text-secondary-basic transition duration-300">
          About the host
        </span>
        <h2 className="head-text">
          Hey there, I’m Andrew Jonson and welcome to my Podcast
        </h2>
        <p className="content">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
        <button className="btn">Know More</button>
        <Image
          className="absolute bottom-0 right-0"
          src="/greenLine.svg"
          alt="long green line"
        />
      </div>
    </section>
  );
}
