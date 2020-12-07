const Base = require('./Base')
const axios = require('axios')

class Map extends Base {
  constructor() {
    super()
  }

  async getByKey(key) {
    const res = await axios.get(this.default_url + '/maps/detail/' + key, this.req_opts)
    this.data = res.data

    return this
  }

  async getByHash(hash) {
    const res = await axios.get(this.default_url + '/maps/by-hash/' + hash, this.req_opts)
    this.data = res.data

    return this
  }
}

module.exports = Map