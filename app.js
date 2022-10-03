const express = require('express')
const sls = require('serverless-http')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello Afrith I am changed new')
})
module.exports.server = sls(app)
