/** @type {import('next').NextConfig} */
// const path = require('path');
import path from 'path'

const nextConfig = {
  i18n: {
    locales: ["en-US", "vi"],
    defaultLocale: "en-US",
    localePath: path.resolve('./public/locales'),
    localeDetection: false,
  },
};

export default nextConfig;
