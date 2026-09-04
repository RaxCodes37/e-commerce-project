import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://schylling.com/wp-content/uploads/2024/08/DRDND_Image1.jpg')],
  },
}

export default nextConfig;
