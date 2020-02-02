import React from "react";
import AppLayout from "../components/Layout";
import Head from "next/head";
import { NextPage } from "next";
import "./_app.scss";

interface ComponentProps {
  Component: NextPage;
}
const Goodreads = ({ Component }: ComponentProps) => {
  return (
    <>
      <Head>
        <title>nodebird2</title>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default Goodreads;
