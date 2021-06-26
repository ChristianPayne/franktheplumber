import Head from 'next/head';
import React from 'react';

type Props = {
  title?: string
}

const index = (props: Props) => {
  return (
    <Head>
      <title>Frank The Plumber{props.title ? ` | ${props.title}` : ""}</title>
      <meta name="description" content="Local plumber" />
      {/* TODO: Add logo */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default index;
