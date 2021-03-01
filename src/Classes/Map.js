const Base = require('./Base')

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

  getDownloadLink(key = null) {
    if (!key && !this.data.key) throw new Error('Key was not provided, or map data was not loaded.')
    if (!key) key = this.data.key

    return this.default_url + '/download/key/' + key
  }
}

module.exports = Map