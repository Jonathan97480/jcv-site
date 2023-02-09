/** @type {import('next').NextConfig} */
const withBundleAnalyzer=require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE==='true',

});

module.exports=withBundleAnalyzer({

  reactStrictMode: true,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,


  images: {
    domains: ['api.jcvconsult.re'],
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
});