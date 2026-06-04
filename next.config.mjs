/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
    ],
  },
  // Canonical host: force the apex domain to the www host over https.
  // (Vercel → Domains should also set apex 308 → www; this is belt-and-braces.)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'raynaters.tech' }],
        destination: 'https://www.raynaters.tech/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
