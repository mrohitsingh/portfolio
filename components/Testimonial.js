import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const Testimonial = ({ testimonial }) => {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);
  console.log(testimonial);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <p className="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            praesentium natus sapiente commodi. Aliquid sunt tempore iste
            repellendus explicabo dignissimos placeat, autem harum dolore
            reprehenderit quis! Quo totam dignissimos earum.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
          <div>
            {testimonial.map((item, id) => {
              console.log(item);
              return (
                <div key={id}>
                  <img
                    alt={item.title}
                    src={
                      builder.image(item.t_image).url() ||
                      "assets/img/bxs-user-circle.svg"
                    }
                    className="mx-auto text-gray-400 h-24 w-24 rounded-full object-cover shadow-xl"
                  />

                  <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                    <p className="text-lg font-bold text-gray-700">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-500">
                      {item.profile}
                    </p>
                    <p className="mt-4 text-sm text-gray-500">{item.desc}</p>
                  </blockquote>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const testimonialQuery = `*[_type == "testimonial"]`;
  const testimonial = await client.fetch(testimonialQuery);

  return {
    props: {
      testimonial,
    },
  };
}
