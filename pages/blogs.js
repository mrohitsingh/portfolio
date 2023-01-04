import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import { useEffect } from "react";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blogs = ({ blogs }) => {
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
          <div className="bg-grey-50" id="blog">
            <div className="container mx-auto py-16 md:py-20">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 md:w-full md:grid-cols-2 lg:w-full lg:grid-cols-3 xl:gap-10  rounded-3xl">
                {blogs.map((blog) => {
                  return (
                    <div key={blog.slug.current}>
                      <div
                        style={{
                          backgroundImage: `url(${
                            builder.image(blog.blogImage).width(200).url() ||
                            "/assets/img/post-01.png"
                          })`,
                        }}
                        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 rounded-t-2xl"
                      >
                        <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50 rounded-t-2xl"></span>
                        <Link
                          key={blog.slug.current}
                          href={"/blog/" + blog.slug.current}
                          className="shadow"
                        >
                          <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-700 bg-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base cursor-pointer hover:bg-purple-200 hover:border-purple-700 hover:text-purple-700">
                            Read More
                          </span>
                        </Link>
                      </div>
                      <div className="bg-white py-6 px-5 xl:py-8 rounded-b-2xl">
                        <div className="flex items-center justify-between pb-5 md:pb-10">
                          <div>
                            <img
                              src={builder
                                .image(blog.authorImage)
                                .width(50)
                                .url()}
                              className="h-10 w-10 rounded-full border-2 border-grey-70 shadow"
                              alt="author image"
                            />
                          </div>
                          <div className="pl-5">
                            <span className="block font-body text-sm font-bold text-grey-30">
                              {blog.authorName}
                            </span>
                            <span className="block pt-1 font-body text-sm font-bold text-grey-30">
                              {blog.postedAt}
                            </span>
                          </div>
                        </div>
                        <Link
                          key={blog.slug.current}
                          href={"/blog/" + blog.slug.current}
                          className="shadow"
                        >
                          <span className="block font-body text-lg font-semibold text-black cursor-pointer hover:text-purple-700">
                            {blog.title}
                          </span>
                        </Link>
                        <span className="block pt-2 font-body text-grey-20">
                          {blog.metadesc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "fgjlw1up",
    dataset: "production",
    useCdn: false,
  });

  const blogs = await client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) {
      title,
      slug,
      metadesc,
      blogImage,
      "authorName": author.author->title,
      "authorImage": author.author->image.asset,
      postedAt,


    }`
  );

  return {
    props: {
      blogs,
    },
  };
}
