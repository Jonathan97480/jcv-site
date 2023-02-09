/** @type {import('next-sitemap').IConfig} */

module.exports={
    siteUrl: process.env.SITE_URL||'https://jcvconsult.re',
    generateRobotsTxt: true, // (optional)
    exclude: ['/server-sitemap.xml,/client,/client/*,client/*/*'],
    // ...other options
}