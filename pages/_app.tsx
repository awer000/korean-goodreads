import React from "react";
import AppLayout from "../components/Layout";
import Head from "next/head";
import { NextPage } from "next";

interface ComponentProps {
  Component: NextPage;
}
const Goodreads = ({ Component }: ComponentProps) => {
  return (
    <>
      <Head>
        <title>nodebird2</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default Goodreads;
