/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ka"],
    localePath: path.resolve("/locales"),
  },
};

export default nextConfig;
