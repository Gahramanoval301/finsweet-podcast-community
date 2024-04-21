"use client";
import LogoSwiper from "@/components/LogoSwiper";
import { sponsors } from "@/data/sponsors";
import Link from "next/link";
import React from "react";

export default function OurSponsors() {
  return (
    <section className="section-space pb-10 py-1">
      <h2 className="head-text text-[2rem] mb-5">Our Sponsors</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-[640px]:hidden">
        {sponsors.map((image, index) => {
          return (
            <div className="sponsor-card" key={index}>
              <img src={image} alt={`${image} ${index}`} />
            </div>
          );
        })}
        <Link
          href={""}
          className="2xl:sponsor-link relative h-56 bg-primary sm:p-7 sm:pb-12 text-white flex flex-col justify-between"
        >
          <h4 className="leading-8 font-semibold text-2xl">Become a Sponsor</h4>
          <span className="font-light">Contact Now</span>
          <img
            className="absolute bottom-8 left-7"
            src="/greenLine.svg"
            alt="green line"
          />{" "}
        </Link>
      </div>
      <div className="sm:hidden">
        <h2 className="head-text text-[2rem] mb-5">Our Sponsors</h2>
        <div className="mb-4 bg-primary py-10 hover:bg-secondary-basic transition duration-300 align-middle">
          <LogoSwiper />
        </div>
        <div>
          {" "}
          <Link href={""} className="sponsor-link">
            <h4 className="leading-8 font-semibold text-2xl">
              Become a Sponsor
            </h4>
            <span className="font-light">Contact Now</span>
            <img
              className="absolute bottom-4 left-7"
              src="/greenLine.svg"
              alt="green line"
            />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
