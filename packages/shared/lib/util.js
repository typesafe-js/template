/**
 * Utility methods
 */
class Util {
  /**
   * @param property
   * @returns {string}
   */
  static env (property) {
    if (process.env[property] !== undefined) {
      /** @type {any} */
      const value = process.env[property]
      return value
    } else {
      console.error('UTIL ENV required environment variable not set: ' + property + '. Exiting.')
      process.exit(1)
    }
  }

  /**
   * @param {number} time
   * @returns {Promise<void>}
   */
  static async sleep (time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
}

module.exports = Util
