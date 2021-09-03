const Util = require('@typesafejs/shared/lib/util')

/**
 * Example Client class
 */
class Client {
  /**
   * @param {string} name
   * @returns {Promise<boolean>}
   */
  async initialize (name) {
    console.info('Intializing: ' + name)
    await Util.sleep(1000)
    return true
  }
}

module.exports = Client
