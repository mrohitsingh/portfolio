import Link from "next/link";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect } from "react";
import Social from "./../components/social";
import Contact from "./contact";
import Portfolio from "./portfolio";

export default function Home({ blogs, profile, services }) {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  return (
    <>
      <div id="main" className="relative">
        <div>
          <div>
            <div
              className="relative bg-cover bg-center bg-no-repeat py-8"
              style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
            >
              <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

              <div className="container xs:px-1 relative z-30 pt-20 pb-9 sm:pt-46 sm:pb-32 lg:pt-48 lg:pb-32">
                <div className="flex flex-col items-center justify-center lg:flex-row">
                  <div className="rounded-full border-8 border-primary shadow-xl">
                    <img
                      src={builder.image(profile.profileImage).width(200).url()}
                      className="h-48 rounded-full sm:h-56"
                      alt="author"
                    />
                  </div>
                  <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                    <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                      Hello I'm {profile.name}!
                    </h1>

                    <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                      <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                        <p className="font-body text-lg uppercase text-white">
                          Let's connect
                        </p>
                        <div className="hidden sm:block">
                          <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-5 pl-2 sm:justify-start sm:pt-0">
                        <Social profile={profile} />
                      </div>
                    </div>
                    <div className="group pt-3">
                      <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                        <Link href={"/blogs"}>All Blogs</Link>
                      </span>
                      <span className="block h-0.5 w-24 bg-transparent group-hover:bg-yellow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-grey-50" id="about">
              <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
                <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                  <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    Who am I?
                  </h2>
                  <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                    {profile.metadesc}
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
                    <Social profile={profile} />
                  </div>
                </div>
                <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                  <div>
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        HTML & CSS
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">
                        85%
                      </h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div
                        className="h-3 rounded-full bg-primary"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        Python
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">
                        70%
                      </h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div
                        className="h-3 rounded-full bg-primary"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        Javascript
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">
                        98%
                      </h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div
                        className="h-3 rounded-full bg-primary"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        Figma
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">
                        91%
                      </h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div
                        className="h-3 rounded-full bg-primary"
                        style={{ width: "91%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container py-16 md:py-20" id="services">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Here's what I'm good at
              </h2>
              <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                These are the services I offer
              </h3>

              <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                {services.map((service, id) => (
                  <div
                    key={id}
                    className="group rounded px-8 py-12 shadow hover:bg-primary"
                  >
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                      <div className="hidden group-hover:block">
                        <img
                          src={builder.image(service.w_image).url()}
                          alt={service.title}
                        />
                      </div>
                      <div className="block group-hover:hidden">
                        <img
                          src={builder.image(service.b_image).url()}
                          alt={service.title}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        {service.title}
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center pt-12">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 text-lg font-semibold uppercase text-white bg-primary rounded hover:bg-yellow-500"
                >
                  Hire me
                </a>
              </div>
            </div>

            <Portfolio />

            <div className="bg-grey-50" id="clients">
              <div className="container py-16 md:py-20">
                <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                  <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    My latest clients
                  </h2>
                  <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-coca-cola.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto"
                      />
                    </span>
                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-apple.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto"
                      />
                    </span>

                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-netflix.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto"
                      />
                    </span>

                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-amazon.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto"
                      />
                    </span>

                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-stripe.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="container py-16 md:py-20" id="work">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                My work experience
              </h2>
              <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here's what I did before freelancing
              </h3>

              <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                  <div className="md:w-2/5">
                    <div className="flex justify-center md:justify-start">
                      <span className="shrink-0">
                        <img
                          src="/assets/img/logo-spotify.svg"
                          className="h-auto w-32"
                          alt="company logo"
                        />
                      </span>
                      <div className="relative ml-3 hidden w-full md:block">
                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                      <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                      <div className="mt-1 flex">
                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                          <span className="block font-body font-bold text-grey-40">
                            Apr 2015 - Mar 2018
                          </span>
                          <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                            Frontend Developer
                          </span>
                          <div className="pt-2">
                            <span className="block font-body text-black">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum mattis felis vitae risus pulvinar
                              tincidunt. Nam ac venenatis enim.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                  <div className="md:w-2/5">
                    <div className="flex justify-center md:justify-start">
                      <span className="shrink-0">
                        <img
                          src="/assets/img/logo-microsoft.svg"
                          className="h-auto w-32"
                          alt="company logo"
                        />
                      </span>
                      <div className="relative ml-3 hidden w-full md:block">
                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                      <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                      <div className="mt-1 flex">
                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                          <span className="block font-body font-bold text-grey-40">
                            Mar 2018 - September 2019
                          </span>
                          <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                            Software Engineer
                          </span>
                          <div className="pt-2">
                            <span className="block font-body text-black">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum mattis felis vitae risus pulvinar
                              tincidunt. Nam ac venenatis enim.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                  <div className="md:w-2/5">
                    <div className="flex justify-center md:justify-start">
                      <span className="shrink-0">
                        <img
                          src="/assets/img/logo-fedex.svg"
                          className="h-auto w-32"
                          alt="company logo"
                        />
                      </span>
                      <div className="relative ml-3 hidden w-full md:block">
                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                      <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                      <div className="mt-1 flex">
                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                          <span className="block font-body font-bold text-grey-40">
                            October 2019 - Feb 2021
                          </span>
                          <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                            DevOps Engineer
                          </span>
                          <div className="pt-2">
                            <span className="block font-body text-black">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum mattis felis vitae risus pulvinar
                              tincidunt. Nam ac venenatis enim.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div
              className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
              style={{
                backgroundImage: "url(/assets/img/experience-figure.png)",
              }}
              id="statistics"
            >
              <div className="container">
                <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                  <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                    <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                      <div>
                        <img
                          src="/assets/img/icon-project.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon project"
                        />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          12
                        </h1>
                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                          Finished Projects
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                      <div>
                        <img
                          src="/assets/img/icon-award.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon award"
                        />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          3
                        </h1>
                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                          Awards Won
                        </h4>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                      <div>
                        <img
                          src="/assets/img/icon-happy.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon happy clients"
                        />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          8
                        </h1>
                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                          Happy Clients
                        </h4>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                      <div>
                        <img
                          src="/assets/img/icon-puzzle.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon puzzle"
                        />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          99
                        </h1>
                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                          Bugs Fixed
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-grey-50" id="blog">
              <div className="container py-16 md:py-20">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  I also like to write
                </h2>
                <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  Check out my latest posts!
                </h4>
                <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                  {blogs.map((item, id) => {
                    return (
                      <div key={id}>
                        <div
                          style={{
                            backgroundImage: `url(${
                              builder.image(item.blogImage).width(200).url() ||
                              "/assets/img/post-01.png"
                            })`,
                          }}
                          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 rounded-t-2xl"
                        >
                          <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50 rounded-t-2xl"></span>
                          <Link
                            key={item.slug.current}
                            href={"/blog/" + item.slug.current}
                            className="shadow"
                          >
                            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-700 bg-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base cursor-pointer hover:bg-purple-200 hover:border-purple-700 hover:text-purple-700">
                              Read More
                            </span>
                          </Link>
                        </div>
                        <div className="bg-white py-6 px-5 xl:py-8 rounded-b-2xl">
                          <Link
                            key={item.slug.current}
                            href={"/blog/" + item.slug.current}
                            className="shadow"
                          >
                            <span className="block font-body text-lg font-semibold text-black cursor-pointer hover:text-purple-700">
                              {item.title}
                            </span>
                          </Link>
                          <span className="block pt-2 font-body text-grey-20">
                            {item.metadesc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Contact />

            {/* <div
              className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
              style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
            >
              <div className="container relative z-30">
                <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                  Keep <span className="font-bold">up-to-date</span> <br />
                  with what I'm up to
                </h3>
                <form className="mt-6 flex flex-col justify-center sm:flex-row">
                  <input
                    className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
                    type="text"
                    id="email"
                    placeholder="Give me your Email"
                  />
                  <button className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
                    Join the club
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const query = `*[_type == "blog"] | order(_createdAt desc)[0..2]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const servicesQuery = `*[_type == "services"] | order(_createdAt asc)[0..2]`;
  const services = await client.fetch(servicesQuery);

  return {
    props: {
      blogs,
      profile,
      services,
    },
  };
}
