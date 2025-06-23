import '@/env/client';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    serverExternalPackages: ['@node-rs/argon2'],
    images: {
        domains: [
            'api.microlink.io', // Microlink Image Preview
            'pbs.twimg.com', // Twitter Images,
            'substackcdn.com', // Substack Images
            'singjupost.com', // Singju Post Images
            'upload.wikimedia.org', // YC Logo
        ],
    },
};

export default nextConfig;
