'use strict';

/**
 * Vin.js controller
 *
 * @description: A set of functions called "actions" for managing `Vin`.
 */

module.exports = {

  /**
   * Retrieve vin records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.vin.search(ctx.query);
    } else {
      return strapi.services.vin.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a vin record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.vin.fetch(ctx.params);
  },

  /**
   * Count vin records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.vin.count(ctx.query, populate);
  },

  /**
   * Create a/an vin record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.vin.add(ctx.request.body);
  },

  /**
   * Update a/an vin record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.vin.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an vin record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.vin.remove(ctx.params);
  }
};
