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
  // Canonical host: apex → www, 308 permanent (Next.js maps permanent:true to 308).
  // Also set the apex → www redirect in Vercel Domains panel for the HTTP-level redirect
  // (covers requests that never reach Next.js, e.g. bare http://raynaters.tech).
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
