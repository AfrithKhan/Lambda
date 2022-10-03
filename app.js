const express = require('express')
const sls = require('serverless-http')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello Afrith I am changed by code pipeline again')
})
module.exports.server = sls(app)
