import React from "react";
import { createClient } from "next-sanity";

const Social = ({ profile }) => {
  return (
    <div>
      <a
        href={profile.person.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-github text-2xl text-primary cursor-pointer pl-2 hover:text-yellow"></i>
      </a>
      <a
        href={profile.person.linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-4"
      >
        <i className="bx bxl-linkedin text-2xl text-primary cursor-pointer pl-2 hover:text-yellow"></i>
      </a>
      <a
        href={profile.person.twitterLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-4"
      >
        <i className="bx bxl-twitter text-2xl text-primary cursor-pointer pl-2 hover:text-yellow"></i>
      </a>
      <a
        href={profile.person.facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-4"
      >
        <i className="bx bxl-facebook-square text-2xl text-primary cursor-pointer hover:text-yellow"></i>
      </a>
      <a
        href={profile.person.instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-4"
      >
        <i className="bx bxl-instagram text-2xl text-primary cursor-pointer pl-2 hover:text-yellow"></i>
      </a>
      <a
        href={profile.person.mediumLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-4"
      >
        <i className="bx bxl-medium text-2xl text-primary cursor-pointer pl-2 hover:text-yellow"></i>
      </a>
    </div>
  );
};
export default Social;

export const getServerSideProps = async (context) => {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const profile = await client.fetch(
    `*[_type == "profile"]{
      "person": person->{
        githubLink,
        linkedinLink,
        twitterLink,
        facebookLink,
        instagramLink,
        mediumLink
      }
    }`
  );

  return {
    props: {
      profile,
    },
  };
};
