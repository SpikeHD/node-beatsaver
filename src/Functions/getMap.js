const MapList = require('../Classes/MapList')

/**
 * Get list of maps based on sort param
 * 
 * @param {String} sort 
 * @param {Number} page 
 */
module.exports = async (sort = 'hot', page = 1) => {
  const mapList = await new MapList(sort, page).get()
  return mapList.data
}