const Map = require('../Classes/Map')

/**
 * Get map by key string.
 * 
 * @param {String} key 
 */
module.exports = async (key) => {
  const map = await new Map().getByKey(key)
  return map.data
}