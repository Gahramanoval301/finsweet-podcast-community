import Image from "next/image";
import React from "react";

export default function WhyIsItFor() {
  return (
    <section className="lg:py-32 sm:py-16 md:pl-8 pl-4 lg:pl-12 relative pb-10 py-10 grid-box md:gap-12 gap-8  ">
      <div className="flex flex-col gap-6 justify-center relative">
        <h2 className="head-text">A podcast for makers and entrepreneurs</h2>
        <p className="content">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
        <Image
          className="absolute -bottom-10 -left-5 md:-left-10 z-10"
          src={"/Home/Line.svg"}
          alt="green line"
        />
        <Image
          className="absolute -top-20 sm:-top-5 md:top-2 right-3"
          src="/Home/Line2.svg"
          alt="purple line"
        />
        <Image
          className="absolute left-2  -top-10 sm:-top-20 lg:top-10"
          src={"/Home/Line3.svg"}
          alt="small purple line"
        />
      </div>
      <div className="sm:scale-110 md:scale-100 bg-primary pl-10 translate-x-4 sm:translate-x-0 md:translate-x-4 ">
        <Image
          className="sm:scale-95 md:scale-90"
          src={"/Home/max-with-microphone.svg"}
          alt="man-with-microphone"
        />
      </div>
    </section>
  );
}
