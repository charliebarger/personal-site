/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: __dirname,
  },
};
