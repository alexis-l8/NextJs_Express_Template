const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = require('./routes/index.js')

app
  .prepare()
  .then(server(handle))
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
