/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: '**' },
            { protocol: 'http', hostname: '**' },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/ipma/:path*',
                destination: 'https://api.ipma.pt/:path*',
            },
        ];
    },
};

export default nextConfig;
