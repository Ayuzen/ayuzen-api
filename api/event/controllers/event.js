const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve a record.
     *
     * @return {Object}
     */

    async findOne(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.services.event.findOne({ slug });
        return sanitizeEntity(entity, { model: strapi.models.event });
    },
    async findPartners(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.services.event.findPartners({ slug });
        return sanitizeEntity(entity, { model: strapi.models.partner });
    },
};
