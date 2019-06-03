'use strict';

/**
 * Plat.js controller
 *
 * @description: A set of functions called "actions" for managing `Plat`.
 */

module.exports = {

  /**
   * Retrieve plat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.plat.search(ctx.query);
    } else {
      return strapi.services.plat.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a plat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.plat.fetch(ctx.params);
  },

  /**
   * Count plat records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.plat.count(ctx.query, populate);
  },

  /**
   * Create a/an plat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.plat.add(ctx.request.body);
  },

  /**
   * Update a/an plat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.plat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an plat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.plat.remove(ctx.params);
  }
};
