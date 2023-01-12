/** @type {import('next').NextConfig} */

module.exports={
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['api.jcvconsult.re'],
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",

  },

}
