import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/sanity";
import { useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

const Category = ({ category, blogs }) => {
  const builder = imageUrlBuilder(client);
  const noOfPost = Math.min(blogs?.length || 0, 6);
  return (
    <>
      <Head>
        <title>{category.title} from ~ Rohit Singh </title>
      </Head>
      <div id="main" className="relative">
        <div>
          <div className="bg-grey-50" id="blog">
            <div className="container mx-auto py-16 md:py-20">
              <h2 className="text-center font-header text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl pt-3">
                {noOfPost} posts tagged with "
                <span className="text-yellow bg-primary px-2 rounded">
                  {category.title}
                </span>
                "
              </h2>
              <h3 className="text-left font-header text-xl font-semibold text-yellow sm:text-2xl lg:text-4xl pt-12">
                Related Posts:{" "}
              </h3>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-6 sm:w-3/4 md:w-full md:grid-cols-2 lg:w-full lg:grid-cols-3 xl:gap-10 rounded-3xl">
                {blogs.map((blog) => {
                  return (
                    <div key={blog.slug.current}>
                      <div className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-54 xl:h-72 rounded-t-2xl">
                        <img
                          src={
                            builder.image(blog.blogImage).width(700).url() ||
                            "/assets/img/post-01.png"
                          }
                          alt={blog.title}
                          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-54 xl:h-72 rounded-t-2xl"
                        />
                        <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50 rounded-t-2xl"></span>
                        <Link
                          key={blog.slug.current}
                          href={"/blog/" + blog.slug.current}
                          className="shadow"
                        >
                          <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-primary bg-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-primary md:text-base cursor-pointer hover:bg-primary hover:border-white hover:text-white">
                            Read More
                          </span>
                        </Link>
                      </div>
                      <div className="bg-white py-6 px-5 xl:py-8 rounded-b-2xl">
                        <div className="flex items-center justify-between pb-5">
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
                          <span className="block font-body text-lg font-semibold text-black cursor-pointer hover:text-primary">
                            {blog.title}
                          </span>
                        </Link>
                        <span className="block pt-2 font-body text-grey-20 line-clamp-3">
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

export default Category;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const category = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0]`,
    { slug }
  );

  const blogs = await client.fetch(
    `*[_type == "blog" && references($categoryId)] | order(postedAt desc) {
      title,
      slug,
      metadesc,
      blogImage,
      "authorName": author.author->title,
      "authorImage": author.author->image.asset,
      postedAt
    }`,
    { categoryId: category._id }
  );

  return {
    props: {
      category,
      blogs,
    },
  };
}
