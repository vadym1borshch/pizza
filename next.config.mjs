/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['dclaevazetcjjkrzczpc.supabase.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'another-example.com',
                port: '',
                pathname: '**/images/**',
            },
        ],
    },
};

export default nextConfig;
