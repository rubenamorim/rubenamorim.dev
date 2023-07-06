import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import { HydrationRenderProvider } from 'hooks/useHydrationRender';
import { ViewportProvider } from 'hooks/useViewport';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import seo from 'data/seo';

import 'styles/global.css';

const analyticsWebsiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...seo} />
            {analyticsWebsiteId && (
                <Script
                    async
                    defer
                    data-website-id={analyticsWebsiteId}
                    src="/stats/script.js"
                />
            )}
            <HydrationRenderProvider>
                <ViewportProvider>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </ViewportProvider>
            </HydrationRenderProvider>
        </>
    );
}
