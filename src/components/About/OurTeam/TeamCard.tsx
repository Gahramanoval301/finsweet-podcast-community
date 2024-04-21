import Link from "next/link";
import React from "react";

export default function TeamCard({ fullName, job, image }) {
  return (
    <div className="card-box max-[640px]:w-[400px] max-[440px]:w-[310px] mx-auto">
      <div className=" w-full overflow-hidden ">
        <img className="w-full hover:scale-110 hover:skew-y-6 transition duration-300" src={image} alt={image} />
      </div>
      <h3 className="leading-7 text-xl md:text-2xl lg:text-3xl text-common-black font-bold">
        {fullName}
      </h3>
      <span className="text-common-grey hover:text-primary transition duration-300">{job}</span>
      <div className="flex gap-5">
        <Link href='' className="sc-icon-box">
          {" "}
          <img
            className="social-icon"
            src="/About/Facebook.svg"
            alt="Facebook-icon"
          />
        </Link>
        <Link href='' className="sc-icon-box">
          {" "}
          <img
            className="social-icon"
            src="/About/Twitter.svg"
            alt="Twitter-icon"
          />
        </Link>
        <Link href='' className="sc-icon-box">
          {" "}
          <img
            className="social-icon"
            src="/About/Linkedin.svg"
            alt="Linkedin-icon"
          />
        </Link>
      </div>
    </div>
  );
}
