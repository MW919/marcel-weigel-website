/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — generates plain HTML/CSS/JS in the 'out' folder.
  // This is what IONOS Deploy Now will serve.
  output: 'export',

  // No image optimization needed for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for clean URLs on static hosts
  trailingSlash: true,
};

module.exports = nextConfig;
