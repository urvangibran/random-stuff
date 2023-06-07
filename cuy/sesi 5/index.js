const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require ('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    response(200, "ini data", "ini message", res)
})

app.get('/main', (req, res) => {
    response(200, "ini data main", "ini message main", res)
})

app.post('/mahasiswa', (req, res) => {
    response(200,"data", "INI POST", res)
})

app.put('/mahasiswa', (req, res) => {
    response(200,"data", "INI PUT ATAU UPDATE", res)
})

app.delete('/mahasiswa', (req, res) => {
    response(200,"data", "INI DELETE", res)
})

app.listen(port, () => {
    console.log(`app running in port ${port}`)
})