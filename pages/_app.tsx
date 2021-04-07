import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import seo from 'data/seo';

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
            <Component {...pageProps} />
        </>
    );
}
