module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
            defaultFrom: 'mukutb.mac@gmail.com',
            defaultReplyTo: 'mukutb.mac@gmail.com',
        },
    },
});