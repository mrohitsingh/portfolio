import { getServerSideSitemap } from "next-sitemap";

const siteUrl = "http://localhost:3000/";

export const getServerSideProps = async (ctx) => {
  const blogs = await fetch("http://localhost:3000/blogs");
  const blogsJson = await blogs.json();
  const blogsSitemaps = blogsJson.map((item) => ({
    loc: `${siteUrl}${item.id.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...blogsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}

// let posts = await fetch("https://rohitsingh.co/blogs");
// posts = await posts.json();
// const newsSitemaps = posts.map((item) => ({
//   loc: `${siteUrl} ${item.id.toString()}`,
//   lastmod: new Date().toISOString(),
// }));

// const fields = [...newsSitemaps];

// return getServerSideSitemap(ctx, fields);
