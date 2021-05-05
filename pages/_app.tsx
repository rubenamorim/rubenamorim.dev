import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import seo from 'data/seo';

import 'styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...seo} />
            <Head>
                <script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js"
                    data-cf-beacon={JSON.stringify({
                        token: process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN,
                    })}
                ></script>
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
