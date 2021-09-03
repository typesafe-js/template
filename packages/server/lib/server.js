/**
 * Example server class
 */
class Server {
  /**
   *
   * @param {string} name
   * @returns {boolean}
   */
  initialize (name) {
    console.info('Intializing: ' + name)
    return true
  }
}

module.exports = Server
