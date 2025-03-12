import { AppProps } from 'next/app';

// Next.js App
export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}