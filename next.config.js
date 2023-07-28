/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    OAuth2: {
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MAIL_OAUTH_USER,
        clientId: process.env.MAIL_OAUTH_CLIENT_ID,
        clientSecret: process.env.MAIL_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.MAIL_OAUTH_REFRESH_TOKEN,
      },
    },
  },
};

module.exports = nextConfig;
