/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/articles', // Change this to your desired path
            permanent: true, // or false if it's a temporary redirect
          },
        ];
      },
};

export default nextConfig;
