/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'bcadigital.co.id',
            port: '',
            pathname: '/**',
          },
        ],
      },
    }

export default nextConfig;