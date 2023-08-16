import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/Home.module.css";
import Script from "next/script";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import ScrollToTop from "./../components/ScrollToTop";
import Loader from "./../components/Loader";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Script
        defer
        src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
      />

      <Script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3V9B9MJ5K8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'G-3V9B9MJ5K8');
        `}
      </Script>

      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

<meta name="google-site-verification" content="AHx2yz-SrQCSUupLJgIUJCMOM1frV_uRhHPzZ996qzE" />
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

        <meta
          name="google-site-verification"
          content="Zfybb8pAQU2y4hrnwFF3rG9rplGPkQ1vqf57zzl0ZDM"
        />
      </Head>

      {pageLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
          <Analytics />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
