const MapList = require('../Classes/MapList')

/**
 * Get map list by search query.
 * 
 * @param {String} query 
 */
module.exports = async (query) => {
  const mapList = await new MapList({ query }).search()
  return mapList.data
}