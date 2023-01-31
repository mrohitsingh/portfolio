import React from "react";
import Link from "next/link";
import { client } from "./../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Testimonial from "./../components/Testimonial";
import Head from "next/head";

const Portfolio = ({ portfolio, testimonial }) => {
  const builder = imageUrlBuilder(client);

  return (
    <>
      <Head>
        <title>Portfolio || Rohit Singh</title>
      </Head>
      <div id="main" className="relative">
        <div className="container py-16 md:py-20" id="portfolio">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check out my Portfolio
          </h2>
          <h5 className="pt-6 text-center font-body text-xl font-medium text-grey-20 sm:text-lg lg:text-xl lg:px-9">
            Welcome to my portfolio! Here you will find a collection of my past
            projects and experiences as a Front-End developer. I have a diverse
            set of skills and a passion for creating innovative and effective
            solutions for my clients. Take a look around and get to know my
            work. I hope to have the opportunity to bring my expertise to your
            next project.
          </h5>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            {portfolio.map((item, id) => {
              return (
                <Link
                  key={id}
                  href="/"
                  className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                  <img
                    src={builder.image(item.image).url()}
                    className="w-full shadow"
                    alt="portfolio image"
                  />
                </Link>
              );
            })}
          </div>

          {/* <Testimonial testimonial={testimonial} /> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

export async function getServerSideProps(context) {
  const portfolioQuery = `*[_type == "portfolio"]`;
  const portfolio = await client.fetch(portfolioQuery);

  // const testimonialQuery = `*[_type == "testimonial"][0..2]`;
  // const testimonial = await client.fetch(testimonialQuery);

  return {
    props: { portfolio },
  };
}
