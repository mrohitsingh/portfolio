import React from "react";
import Head from "next/head";
import { client } from "./../lib/sanity";
import { useEffect } from "react";
import Social from "./social";

const Footer = ({ profile }) => {
  return (
    <div>
      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2021-{new Date().getFullYear()}. All right reserved,
            Rohit Singh.
          </p>
          {/* <div className="flex items-center justify-between pt-5 pl-2 sm:justify-start sm:pt-0">
            <Social profile={profil} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

export async function getServerSideProps(context) {
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      profile,
    },
  };
}
