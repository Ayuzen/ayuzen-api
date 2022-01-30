'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    findPartners: async ({ slug }) => {
        const entity = await strapi.services.event.findOne({ slug });
        if (entity) {
            const sessions = await strapi.services.session.find({ id_in: entity.sessions.map(s => s.id) });
            return strapi.services.session.getUniquePartners(sessions)
        } else {
            return []
        }
    },
};
