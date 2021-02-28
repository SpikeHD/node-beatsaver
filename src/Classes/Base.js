const got = require('got')
const client = got.extend( {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
  }
})

class Base {
  /**
   * Just set the default URL
   */
  constructor() {
    this.default_url = 'http://beatsaver.com/api'
    this.client = client
  }
}

module.exports = Base