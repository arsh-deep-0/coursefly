/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL;
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/:path*`,
      },
     
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
