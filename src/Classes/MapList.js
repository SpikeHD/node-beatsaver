const Base = require('./Base')
const axios = require('axios')

class MapList extends Base {
  /**
   * Takes options ovject which can be empty, but is used for sort method and page.
   * 
   * @param {Object} opts
   */
  constructor(opts) {
    super()

    const valid = ['uploader', 'hot', 'rating', 'latest', 'downloads', 'plays']

    this.sort = opts.sort.toLowerCase() || 'hot'
    this.page = opts.page || 1

    if (this.sort === 'uploader') {
      if (!opts.id) throw new Error('Sort param "uploader" used, but no uploader ID was provided (missing "id" key in object.)')
      else this.sort += '/' + opts.id
    }

    if (!this.sort || !valid.some(v => this.sort.includes(v))) throw new Error('Invalid sort param. You may use the following: ' + valid.join(', '))
  }

  async get() {
    const res = await axios.get(this.default_url + '/maps/' + this.sort + '/' + this.page, this.req_opts)
    this.data = res.data
    
    return this
  }
}

module.exports = MapList