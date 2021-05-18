import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import { HydrationRenderProvider } from 'hooks/useHydrationRender';
import { ViewportProvider } from 'hooks/useViewport';

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
            <HydrationRenderProvider>
                <ViewportProvider>
                    <Component {...pageProps} />
                    <Footer />
                </ViewportProvider>
            </HydrationRenderProvider>
        </>
    );
}
