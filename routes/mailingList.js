const express = require('express')
const insertEmail = require('../db/query/insertEmail.js')
const mailingListRoute = express.Router()

mailingListRoute.post('/submit', (req, res) => {
  const { first_name, last_name, email } = req.body
  insertEmail(first_name, last_name, email)
    .then(() => {
      res.status(201).redirect('/')
    })
    .catch(err => {
      console.log('Mailing List: Email Duplicate')
      res.status(400).redirect('/')
    })
})

module.exports = mailingListRoute
