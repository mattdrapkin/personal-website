import '@/env/client';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    serverExternalPackages: ['@node-rs/argon2'],
    images: {
        domains: [
            'api.microlink.io', // Microlink Image Preview
        ],
    },
};

export default nextConfig;
