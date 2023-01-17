import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const Services = ({ services }) => {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  return (
    <>
      <div id="main" className="relative">
        <div className="container py-16 md:py-20" id="services">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here's what I'm good at
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services I offer
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            {services &&
              services.map((service, id) => {
                return (
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
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const servicesQuery = `*[_type == "services"]`;
  const services = await client.fetch(servicesQuery);

  return {
    props: { services },
  };
}
