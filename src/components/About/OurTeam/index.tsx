import { ourTeam } from "@/data/ourTeam";
import React from "react";
import TeamCard from "./TeamCard";

export default function OurTeam() {
  return (
    <section className="section-space host-content-box">
      <h2 className="head-text">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
        {ourTeam.map(({ fullName, job, image, id }) => {
          return (
            <TeamCard key={id} fullName={fullName} job={job} image={image} />
          );
        })}
      </div>
      <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
    </section>
  );
}
