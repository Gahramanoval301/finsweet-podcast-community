import React from "react";

export default function Items() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 section-space gap-8 md:gap-5 lg:gap-0 place-content-center place-items-center mx-auto max-[768px]:w-[500px] max-[550px]:w-[300px]">
      <div className="card-box">
        <img src="/About/Icon1.svg" alt="card-icon1" />
        <h4 className="font-bold text-xl hover:text-primary transition duration-300">500+ Podcast</h4>
        <p className="content lg:w-4/5">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </div>
      <div className="card-box">
        <img src="/About/Icon2.svg" alt="card-icon2" />
        <h4 className="font-bold text-xl hover:text-primary transition duration-300">24M Views</h4>
        <p className="content lg:w-4/5">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </div>
      <div className="card-box">
        <img src="/About/Icon3.svg" alt="card-icon3" />
        <h4 className="font-bold text-xl hover:text-primary transition duration-300">600k Subs</h4>
        <p className="content lg:w-4/5">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </div>
    </section>
  );
}
