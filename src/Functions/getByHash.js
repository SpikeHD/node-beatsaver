const Map = require('../Classes/Map')

/**
 * Get map by hash string.
 * 
 * @param {String} hash 
 */
module.exports = async (hash) => {
  const map = await new Map().getByHash(hash)
  return map.data
}