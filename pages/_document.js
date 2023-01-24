import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ title }) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{title}</title>

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

        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossOrigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
