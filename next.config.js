/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const imgDomain = {
  images: { domains: ['flagcdn.com'] },
}

const svgr = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = { ...nextConfig, ...imgDomain, ...svgr }
