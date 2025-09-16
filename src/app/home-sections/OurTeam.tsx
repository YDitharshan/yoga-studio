import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Yoga Vikirthan",
    role: "Founder & CEO",
    image: "/images/yogastudio-team-1.png",
  },
  {
    name: "Tj Renujan",
    role: "Video Editor",
    image: "/images/yogastudio-team-2.png",
  },
  {
    name: "Thilikraj",
    role: "Junior Photographer",
    image: "/images/yogastudio-team-3.png",
  },
];

const OurTeam = () => {
  return (
    <section className="section bg-neutral-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-neutral-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
