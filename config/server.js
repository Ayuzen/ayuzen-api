module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env('', 'https://a162-117-205-212-55.ngrok.io'),
  url: env('', 'https://admin.ayuzen.org'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '73f419a19f4f5e17a948496a980eaa07'),
    },
  },
});
