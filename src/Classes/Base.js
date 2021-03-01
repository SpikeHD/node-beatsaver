const got = require('got')
const { version } = require('../../package.json')
const client = got.extend({
  headers: {
    'User-Agent': 'Node-Beatsaver/' + version,
  }
})

class Base {
  /**
   * Just set the default URL
   */
  constructor() {
    this.default_url = 'https://beatsaver.com/api'
    this.client = client
  }
}

module.exports = Base