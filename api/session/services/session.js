'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    getUniquePartners: async (sessions) => {
        const partners = [];
        const taken = [];
        for (const session of sessions) {
            for (const partner of session.partners) {
                if (!taken.includes(partner.id)) {
                    partners.push(partner);
                    taken.push(partner.id);
                }
            }
        }
        return partners;
    },
};
