const Base = require('./Base')
const got = require('got')

class MapList extends Base {
  /**
   * Takes options object which can be empty, but is used for sort method and page.
   * 
   * @param {Object} opts
   */
  constructor(opts) {
    super()

    const valid = ['uploader', 'hot', 'rating', 'latest', 'downloads', 'plays']

    this.sort = (opts.sort || 'hot').toLowerCase()
    this.page = opts.page || 1
    this.query = opts.query || null

    if (this.sort === 'uploader') {
      if (!opts.id) throw new Error('Sort param "uploader" used, but no uploader ID was provided (missing "id" key in object.)')
      else this.sort += '/' + opts.id
    }

    if (!this.sort || !valid.some(v => this.sort.includes(v))) throw new Error('Invalid sort param. You may use the following: ' + valid.join(', '))
  }

  /**
   * Grab all related map list data
   */
  async get() {
    const res = await this.client.get(this.default_url + '/maps/' + this.sort + '/' + this.page, this.req_opts)
    this.data = JSON.parse(res.body)
    
    return this
  }

  /**
   * Static function for getting maps
   * 
   * @param {String} query 
   */
  static async search(query = null) {
    if (!this.query && query) throw new Error('Query not provided in constructor. Include it in your options object (eg. { query: "t+pazolite" }).')
    if (!query) query = this.query
    
    const res = await this.client.get(this.default_url + '/search/text/' + this.page + '/?q=' + this.query, this.req_opts)
    this.data = JSON.parse(res.body)

    return this
  }
}

module.exports = MapList