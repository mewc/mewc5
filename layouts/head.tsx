import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        crossOrigin="anonymous"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Norican&display=swap"
        rel="stylesheet"
      />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
      <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
      <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
      <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
      <link href="/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
      <link
        href="/apple-icon-114x114.png"
        rel="apple-touch-icon"
        sizes="114x114"
      />
      <link
        href="/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="/apple-icon-144x144.png"
        rel="apple-touch-icon"
        sizes="144x144"
      />
      <link
        href="/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/android-icon-192x192.png"
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/manifest.json" rel="manifest" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
      <meta content="#ffffff" name="theme-color" />
    </NextHead>
  );
};
