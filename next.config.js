const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');

const config = {
    future: {
        webpack5: true,
    },
};

module.exports = withPlugins(
    [bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })],
    config
);
