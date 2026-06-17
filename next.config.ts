import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/automation_with_zara" : undefined,
  assetPrefix: isGitHubPages ? "/automation_with_zara/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
