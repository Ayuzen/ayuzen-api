'use strict';

const pluginId = require("../admin/src/pluginId");

/**
 * messages.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
    findAll: async () => {
        return await strapi.query('message', pluginId).find({});
    },
    createNewMessage: async (data) => {
        return await strapi.query('message', pluginId).create(data);
    }
};
