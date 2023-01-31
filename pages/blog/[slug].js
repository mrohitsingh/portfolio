import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { client } from "./../../lib/sanity";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import imageUrlBuilder from "@sanity/image-url";
import Social from "./../../components/social";
import { useForm, SubmitHandler } from "react-hook-form";
import CodeBlock from "./../../components/Codeblock";

const Blog = ({ blog, profile }) => {
  const [submitted, setSubmitted] = useState(false);
  const [scroll, setScroll] = useState(0);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { slug } = router.query;

  const builder = imageUrlBuilder(client);

  const onSubmit = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitted(false);
      });
  };
  const link = (props) => {
    return (
      <a
        className="no-underline relative before:content-[''] before:bg-primary before:absolute before:left-0 before:bottom-0 before:w-full	before:h-2 before:-z-1 before:transition-all before:ease-in-out before:duration-500 hover:before:bottom-0 hover:before:h-full hover:before:w-full hover:text-white"
        href={props.mark.href}
      >
        {props.children}
      </a>
    );
  };

  const serializers = {
    marks: {
      link,
    },
    types: {
      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
      li: ({ children }) => <li className="special-list-item">{children}</li>,
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),

      codeBlock: (props) => (
        <CodeBlock
          code={props.node.code}
          language={props.node.language}
          {...props}
        />
      ),
    },
  };

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{blog.title}</title>

        <meta name="theme-color" content="#5540af" />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta
          name="keywords"
          content="mrohitsingh, rohit singh, m_rohitsingh, frontend developer, coder, portfolio, freelancer, blogger, graphic designer, Rohit Singh, rohitsingh.co, @mrohitsingh, rohitsingh.code, frontend developer in india, freelancer in india, blogger in india, Rohit Singh"
        />

        <link rel="canonical" href="https://www.rohitsingh.co/" />

        <meta property="og:title" content="Rohit Singh" />

        <meta property="og:locale" content="en_US" />

        <meta property="og:url" content="https://www.rohitsingh.co/" />

        <meta
          name="description"
          content="I am Rohit Singh a front-end developer, graphics designer, blogger and freelancer"
        />

        <meta property="og:site_name" content="Rohit Singh" />

        <meta property="og:image" content="/assets/img/social.png" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@m_rohitsingh" />

        <meta name="twitter:title" content="Rohit Singh" />

        <meta
          name="twitter:description"
          content="I am Rohit Singh a front-end developer, graphics designer, blogger and freelancer"
        />

        <meta name="twitter:image" content="/assets/img/social.png" />
      </Head>

      <div id="main" className="relative">
        <div>
          <div>
            <div id="progressBarContainer">
              <div
                id="progressBar"
                style={{
                  transform: `scale(${scroll}, 0.2)`,
                  opacity: 1,
                }}
              ></div>
            </div>
            <div className="container py-6 md:py-10">
              <div className="mx-auto max-w-4xl">
                <div className="">
                  <h1 className="pt-10 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                    {blog.title}
                  </h1>
                  <div className="flex items-center pt-5 md:pt-10">
                    <div>
                      <img
                        src={builder.image(blog.authorImage).width(50).url()}
                        className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                        alt="author image"
                      />
                    </div>
                    <div className="pl-5">
                      <span className="block font-body text-xl font-bold text-grey-10">
                        By {blog.authorName}
                      </span>
                      <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                        {blog.postedAt}
                      </span>
                    </div>
                  </div>
                  <span className="block pt-2 font-body text-lg text-grey-20">
                    {blog.metadesc}
                  </span>
                </div>
                <div className="prose max-w-none text-lg px-3">
                  <BlockContent
                    blocks={blog.content}
                    projectId="fgjlw1up"
                    dataset="production"
                    serializers={serializers}
                  />
                </div>
                {/* categories */}
                {blog.categories && blog.categories.length > 0 && (
                  <div className="flex flex-row pt-2 pr-3">
                    {blog.categories.map((category, id) => (
                      <div className="pr-10">
                        <a
                          href="#"
                          className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
                          key={id}
                        >
                          {category}
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-10 flex justify-between border-t border-lila py-12">
                  <a
                    href={"/blog/" + blog.previousPost}
                    className="flex items-center"
                  >
                    <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                    <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                      Previous Post
                    </span>
                  </a>
                  <a href="/" className="flex items-center">
                    <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                      Next Post
                    </span>
                    <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                  </a>
                </div>

                {/* author start */}
                <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                  <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                    <img
                      src={builder.image(blog.authorImage).width(150).url()}
                      className="rounded-full shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                    <h3 className="pt-10 font-body text-xl font-bold text-secondary md:pt-0">
                      {blog.authorName}
                    </h3>
                    <p className="pt-5 font-body text-sm leading-8 text-secondary sm:leading-9 md:text-sm md:leading-9 lg:leading-9 xl:leading-9">
                      {blog.authorAbout}
                    </p>
                    <Social profile={profile} />
                  </div>
                </div>
                {/* author end */}

                {/* comment form start */}
                {submitted ? (
                  <div className="flex flex-col items-center bg-indigo-400  border-t border-lila py-12 px-12 pt-12 md:flex-row md:items-start xl:pb-20">
                    <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                      <h3 className="pt-10 font-body text-xl text-white font-bold text-secondary md:pt-0">
                        Thank you for your comment!
                      </h3>
                      <p className="pt-5 font-body text-sm text-white leading-8 text-secondary sm:leading-9 md:text-sm md:leading-9 lg:leading-9 xl:leading-9">
                        Your comment will be reviewed and posted shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <hr className="border-lila my-5" />
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col py-5 max-w-2xl mx-auto mb-10"
                    >
                      <h3 className="font-body text-md font-bold text-indigo-500">
                        Enjoyed This Post?
                      </h3>
                      <h3 className="font-body text-2xl font-bold text-secondary">
                        Leave a Comment
                      </h3>
                      <hr className="border-lila my-5" />
                      <input
                        {...register("_id")}
                        type="hidden"
                        name="_id"
                        value={blog._id}
                      />
                      <label className="font-body text-lg font-bold text-secondary">
                        <span className="text-gray-700">Name</span>
                        <input
                          {...register("name", { required: true })}
                          aria-invalid={errors.name ? "true" : "false"}
                          type="text"
                          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-primary outline-none focus:ring-primary"
                          placeholder="Rohit Singh"
                        />
                        {errors.name && (
                          <span className="text-red-500">Name is required</span>
                        )}
                      </label>

                      <label className="font-body text-lg font-bold text-secondary pt-3">
                        <span className="text-gray-700">Email</span>
                        <input
                          {...register("email", { required: true })}
                          aria-invalid={errors.email ? "true" : "false"}
                          type="email"
                          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-primary outline-none focus:ring-primary"
                          placeholder="rohitsingh@example.com"
                        />
                        {errors.email && (
                          <span className="text-red-500">
                            Email is required
                          </span>
                        )}
                      </label>

                      <label className="font-body text-lg font-bold text-secondary  pt-3">
                        <span className="text-gray-700">Comment</span>
                        <textarea
                          {...register("comment", { required: true })}
                          aria-invalid={errors.comment ? "true" : "false"}
                          className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-primary outline-none focus:ring-primary"
                          placeholder="Your Comment"
                          spellCheck="true"
                          rows={8}
                        ></textarea>
                        {errors.comment && (
                          <span className="text-red-500">
                            Comment is required
                          </span>
                        )}
                      </label>
                      <input
                        type="submit"
                        className="mt-6 flex items-center justify-center rounded bg-indigo-600 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
                      />
                    </form>
                  </>
                )}
                {/* comment form end */}

                {/* display comments started */}
                {blog.comments && blog.comments.length > 0 && (
                  <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y">
                    <h3 className="font-body text-4xl font-bold text-secondary pb-4">
                      Comments
                    </h3>
                    <hr className="border-lila my-4" />
                    {blog.comments.map((comment, _key) => (
                      <div
                        key={comment._key}
                        className="flex flex-col items-center pt-3 md:flex-row md:items-start xl:pb-10"
                      >
                        <div className="ml-0 flex flex-row items-baseline text-center md:ml-10 md:w-5/6 md:text-left">
                          <h3 className="font-body lg:text-xl font-bold text-indigo-500 md:text-lg sm:text-sm">
                            {comment.name + ":"}
                          </h3>

                          <p className=" pl-3 font-body lg:text-lg leading-8 text-grey-20 sm:leading-9 md:text-lg sm:text-sm md:leading-9 lg:leading-9 xl:leading-9">
                            {comment.comment}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {/* display comments end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const query = `*[_type == "blog" && slug.current == '${slug}'][0]
  {
    _id,
    title,
    content,
    postedAt,
    metadesc,
    "authorName": author.author->title,
    "authorImage": author.author->image.asset,
    "categories": categories[]->name,
    "authorAbout": author.author->about,
    "comments": *[_type == "comment" && blog._ref == ^._id && approved == true] | order(_createdAt desc),
    "previousPost": *[_type == "blog" && _id < ^._id][0]{
      "slug": slug.current
      },
    "nextPost": *[_type == "blog" && _id > ^._id][0]{
      "slug": slug.current
      },
  }`;
  const blog = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blog,
      profile,
    },
  };
};
