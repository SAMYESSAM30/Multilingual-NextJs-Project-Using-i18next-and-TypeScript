import pkg from "./next-i18next.config.js"; // Import the entire CommonJS module
const { i18n } = pkg; // Destructure the i18n object

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n, // Add the i18n configuration here
};

export default nextConfig; // Use export default in ES modules
