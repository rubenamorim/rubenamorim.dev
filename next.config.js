/* eslint-disable eslint-comments/disable-enable-pair,@typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    experimental: {
        runtime: 'experimental-edge',
    },
    async headers() {
        if (!isProduction) {
            return [];
        }

        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'none'; img-src 'self'; style-src 'self'; style-src-elem 'self' 'sha256-TyNUDnhSZIj6eZZqS6qqchxBN4+zTRUU+TkPeIxxT1I='; manifest-src 'self'; script-src 'self' 'unsafe-inline' ajax.cloudflare.com; connect-src 'self';",
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
};

module.exports = withPlugins(
    [bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })],
    config
);
