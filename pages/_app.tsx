import 'tailwindcss/tailwind.css';

import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import metadata from 'data/seo';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...metadata} />
            <Component {...pageProps} />
        </>
    );
}
