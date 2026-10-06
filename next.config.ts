import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The photos in public/images are already WebP at their final size.
    unoptimized: true,
  },
};

export default nextConfig;
