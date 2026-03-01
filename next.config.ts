/** @type {import('next').NextConfig} */
const nextConfig = {
   transpilePackages: ['@splinetool/react-spline'],
  experimental: {
    turbo: {
      rules: {
        // Игнорируем специфические расширения для корректной передачи буфера
        '*.splinecode': ['raw-loader'],
      },
    },
  },
  images: {
    domains: [
      'cdn.shopify.com',
      'static.vecteezy.com',
      'images.pexels.com',
      'images.stockcake.com',
      'media.istockphoto.com'
    ]
  }
}

