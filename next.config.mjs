/** @type {import('next').NextConfig} */
const nextConfig = {
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
