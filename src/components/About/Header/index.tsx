import React from "react";

export default function HeaderAbout() {
  return (
    <section className="lg:py-26 sm:py-16 md:px-10 py-10 sm:px-4 lg:px-20 max-[640px]:gap-8 grid-box place-content-end place-items-center">
      <div className="host-content-box items-start justify-center md:w-4/5 ">
        <h2 className="head-text">About Finsweet Podcast</h2>
        <p className="content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button className="btn">Subscribe Now!</button>
      </div>
      <div className="scale-90">
        <img src="/About/Icon.svg" alt="microphone-icon" />
      </div>
    </section>
  );
}
