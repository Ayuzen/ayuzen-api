const sgMail = require('@sendgrid/mail')

const sendgridApiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridApiKey)

const mailList = [
    "mukutb.mac@gmail.com",
    "operations@ayuzen.org",
    "abhilashanand649@gmail.com",
    "roydiptopal1996@gmail.com",
    "swap0chavan@gmail.com",
    "samanway1996@gmail.com"
]

'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async afterCreate(result, data) {
            if (!sendgridApiKey) return;
            const msg = {
                to: mailList,
                from: 'mukutb.mac@gmail.com', // Change to your verified sender
                subject: 'New Booking',
                text: 'New booking',
                html: `
                    <h3>New Booking for ${result?.stay.name} </h3>
                    <p>There is a new booking from <b>${result.name}</b> with total guests of: <b>${result.num_guests}</b>. Please login in to the 
                    <a href="https://admin.ayuzen.org/admin" target="_blank">admin panel</a> for immediate action.</p>
                `,
            }
            sgMail.send(msg)
        },
    },
};
