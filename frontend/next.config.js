const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
// const dns = require('dns')

// dns.setDefaultResultOrder('ipv4first')
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: false,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
