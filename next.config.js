/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["images.pexels.com", "images.unsplash.com", "images.freepik.com"],
  },

  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true,
  //     layers: true,
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
