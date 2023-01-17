import "../styles/globals.css";
import Script from "next/script";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import ScrollToTop from "./../components/ScrollToTop";

export default function App({ Component, pageProps }) {
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
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
    </>
  );
}
