import React from "react";

export default function AboutTeam() {
  return (
    <section className="md:px-10 py-10 sm:px-4 lg:px-36 host-content-box justify-start">
      <h2 className="head-text lg:w-4/12 xl:w-3/12">A few words about our team</h2>
      <div>
        <img
          className="object-cover w-full max-[640px]:h-56"
          src="/About/Image.png"
          alt="people-hold-hands"
        />
      </div>
      <div className="grid-box gap-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
          condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi
          augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer
          viverra sed. Penatibus tortor consequat, habitasse non nisl.
        </p>
        <p>
          <span className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </span>
          Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
          volutpat ut netus malesuada enim penatibus non aliquet.
        </p>
      </div>
      <img className="absolute -left-3 top-[20%] sm:left-5 sm:top-[30%]" src="/greenLine.svg" alt="long green line" />
      <img className="absolute -right-3 top-[30%] sm:right-10 sm:top-[25%]" src="/purplebLine.svg" alt="bold small purple line" />
    </section>
  );
}
