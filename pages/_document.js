import Document from 'next/app';

export default function CustomDocument({ Component, pageProps }) {
  return (
    <Document
      Component={Component}
      pageProps={pageProps}
    />
  );
}