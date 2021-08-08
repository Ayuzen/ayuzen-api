'use strict';

const pluginId = require("../admin/src/pluginId");

/**
 * messages.js controller
 *
 * @description: A set of functions called "actions" of the `messages` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

  create: async (ctx) => {
    // Add your own logic here.
    const { name, message, email, isUnread = true } = ctx.request.body;
    if (!name || !message || !email) {
      ctx.throw(406, 'Missing required fields')
    }
    const messageService = strapi.plugins[pluginId].services['messages']
    try {
      const res = await messageService.createNewMessage({ name, message, email, isUnread });
      ctx.send(res);
    } catch (error) {
      ctx.throw(500, 'Something went wrong')
    }
  }
};
