const Base = require('./Base')
const axios = require('axios')

class MapList extends Base {
  /**
   * Takes sort param and optional page.
   * 
   * @param {String} sort 
   * @param {Number} page
   */
  constructor(sort, page = 1) {
    super()

    const valid = ['uploader', 'hot', 'rating', 'latest', 'downloads', 'plays']

    this.sort = sort
    this.page = page

    if (!sort || !valid.includes(sort)) throw new Error('Invalid sort param. You may use the following: ' + valid.join(', '))
  }

  async get() {
    const res = await axios.get(this.default_url + '/maps/' + this.sort + '/' + this.page, this.req_opts)
    this.data = res.data
    
    return this
  }
}

module.exports = MapList