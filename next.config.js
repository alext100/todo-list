/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SERVER_URL_LOCAL: process.env.NEXT_PUBLIC_SERVER_URL_LOCAL,
    NEXT_PUBLIC_AUTH_USER_URL_LOCAL:
      process.env.NEXT_PUBLIC_AUTH_USER_URL_LOCAL,
    NEXT_PUBLIC_SERVER_URL_MOCKEND: process.env.NEXT_PUBLIC_SERVER_URL_MOCKEND,
  },
};
module.exports = nextConfig;
