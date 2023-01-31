import { getServerSideSitemap } from "next-sitemap";

const siteUrl = "https://rohitsingh.co/";

export const getServerSideProps = async (ctx) => {
  const blogs = await fetch("https://rohitsingh.co/blogs");
  const blogsJson = await blogs.json();
  const blogsSitemaps = blogsJson.map((item) => ({
    loc: `${siteUrl}${item.id.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...blogsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
