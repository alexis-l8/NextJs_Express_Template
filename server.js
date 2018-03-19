const express = require("express")
const bodyParser = require("body-parser")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))

    server.post("/api/mailing-list", (req, res) => {
      console.log(req.body)
      res.end("thank you")
    })

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log("> Ready on https://localhost3000")
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
