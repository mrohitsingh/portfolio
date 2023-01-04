import React from "react";
import Link from "next/link";
import Testimonial from "./../components/Testimonial";

const Portfolio = () => {
  return (
    <div id="main" className="relative">
      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h5 className="pt-6 text-center font-body text-xl font-medium text-grey-20 sm:text-lg lg:text-xl lg:px-9">
          Welcome to my portfolio! Here you will find a collection of my past
          projects and experiences as a Front-End developer. I have a diverse
          set of skills and a passion for creating innovative and effective
          solutions for my clients. Take a look around and get to know my work.
          I hope to have the opportunity to bring my expertise to your next
          project.
        </h5>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <Link
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/assets/img/image_finder_live.png"
              className="w-full shadow"
              alt="portfolio image"
            />
          </Link>
          <Link
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/assets/img/movie_hunter.png"
              className="w-full shadow"
              alt="portfolio image"
            />
          </Link>
          <Link
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/assets/img/todo_list.png"
              className="w-full shadow"
              alt="portfolio image"
            />
          </Link>
          <Link
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/assets/img/unsplace.png"
              className="w-full shadow"
              alt="portfolio image"
            />
          </Link>
          <Link
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/assets/img/world_rank.png"
              className="w-full shadow"
              alt="portfolio image"
            />
          </Link>
        </div>

        <Testimonial />
      </div>
    </div>
  );
};

export default Portfolio;
