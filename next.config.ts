import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/automation_with_zara" : undefined,
  assetPrefix: isGitHubPages ? "/automation_with_zara/" : undefined,
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
