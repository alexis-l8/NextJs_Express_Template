const express = require('express')
const bodyParser = require('body-parser')
const mailingList = require('./mailingList.js')

const server = handle => {
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use('/api/mailing-list', mailingList)

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on https://localhost3000')
  })
}

module.exports = server
