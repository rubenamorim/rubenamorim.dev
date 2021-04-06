import type { NextSeoProps } from 'next-seo';

const metadata: NextSeoProps = {
    title: 'Ruben Amorim | Software Engineer',
    description:
        'Software engineer passionate about building things for the web!',
    canonical: 'https://rubenamorim.dev/',
    openGraph: {
        title: 'Ruben Amorim | Software Engineer',
        description:
            'Software engineer passionate about building things for the web!',
        url: 'https://rubenamorim.dev/',
        type: 'website',
        images: [
            {
                url: 'https://rubenamorim.dev/avatar-1.png',
                width: 421,
                height: 421,
                alt: "Ruben's Avatar",
            },
        ],
    },
    twitter: {
        cardType: 'summary_large_image',
        handle: '@rubentamorim',
        site: '@rubentamorim',
    },
    additionalMetaTags: [
        {
            name: 'title',
            content: 'Ruben Amorim | Software Engineer',
        },
        {
            name: 'keyword',
            content:
                'portfolio, software engineer, developer, frontend, javascript, typescript, react, node',
        },
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
        {
            rel: 'manifest',
            href: '/manifest.json',
        },
    ],
};

export default metadata;
