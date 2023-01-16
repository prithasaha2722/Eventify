const { json } = require('micro')
const { router, post, get } = require('microrouter')

const app = require('./app')

const api = router(
  post('/', (req, res) => app(req, res)),
  get('/', (req, res) => app(req, res)),
)

module.exports = api