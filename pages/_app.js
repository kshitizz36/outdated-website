#!/usr/bin/env node
import React from 'react';
import { AppProps } from "next/dist/next-server/lib/utils"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return /*#__PURE__*/
  /*#__PURE__*/React.createElement(
    Component, pageProps
  );
}

export default MyApp;

