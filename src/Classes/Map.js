const Base = require('./Base')
const got = require('got')

class Map extends Base {
  constructor() {
    super()
  }

  async getByKey(key) {
    const res = await this.client.get(this.default_url + '/maps/detail/' + key, this.req_opts)
    this.data = JSON.parse(res.body)

    return this
  }

  async getByHash(hash) {
    const res = await this.client.get(this.default_url + '/maps/by-hash/' + hash, this.req_opts)
    this.data = JSON.parse(res.body)

    return this
  }
}

module.exports = Map