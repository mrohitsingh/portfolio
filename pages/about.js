import React from "react";
import { client } from "./../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Social from "./../components/social";
import Head from "next/head";

const about = ({ profile, langIcon }) => {
  const builder = imageUrlBuilder(client);

  return (
    <>
      <Head>Know About Rohit Singh</Head>
      <div id="main" className="relative">
        <div className="bg-grey-50" id="about">
          <div className="flex justify-center items-center font-header text-4xl font-semibold uppercase text-primary center sm:text-5xl lg:text-6xl pt-20">
            <h2 className="pt-2">Who am I?</h2>
          </div>
          <div className="container flex flex-col justify-between items-center lg:pt py-4 md:py-10 lg:flex-row">
            <div className="w-full text-center sm:w-/4 lg:w-2/5 lg:text-left">
              <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                {profile.metadesc || "About Me"}
              </h4>
              <p className="pt-6 font-body leading-relaxed text-grey-20">
                {profile.about}
              </p>
              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="font-body text-lg font-semibold uppercase text-grey-20">
                    Connect with me
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-2xl text-primary"></i>
                  </div>
                </div>
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
              </div>
            </div>
            <div className="w-full pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
              <div className="flex items-end justify-between">
                <img
                  src={builder.image(profile.profileImage).url()}
                  alt="Profile Image"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-col justify-center items-center font-header text-4xl font-semibold uppercase text-primary center sm:text-5xl lg:text-6xl pt-12">
            <h2 className="pt-10">What I do?</h2>
            <div className="grid gap-6 pt-10  md:gap-7 md:pt-12 md:grid-cols-3 sm:grid-cols-2 pb-4">
              {langIcon.map((lang, id) => {
                return (
                  <div
                    className="rounded px-6 py-6 sm:px-2 sm:py-2 shadow hover:bg-primary"
                    key={id}
                    title={lang.title}
                  >
                    <div className="mx-auto h-20 w-20 text-center xl:h-24 xl:w-24">
                      <img
                        className="w-17 h-17"
                        src={builder.image(lang.image).url()}
                        alt="Profile Image"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;

export async function getServerSideProps(context) {
  const profileQuery = `*[_type == "profile"][0]
  {
    metadesc,
    about,
    profileImage,
    person {
      githubLink,
      linkedinLink,
      twitterLink,
      facebookLink,
      instagramLink,
      mediumLink
    }
  }`;
  const profile = await client.fetch(profileQuery);

  const langIconQuery = `*[_type == "language"]`;
  const langIcon = await client.fetch(langIconQuery);

  return {
    props: { profile, langIcon },
  };
}
