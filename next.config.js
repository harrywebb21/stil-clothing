/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lp.weekday.com", "upload.wikimedia.org"],
  },
};
module.exports = nextConfig;
