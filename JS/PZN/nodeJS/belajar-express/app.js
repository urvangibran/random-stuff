const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    // res.send(`Ini adalah halaman about`)
    res.sendFile('./pdf.pdf', {root: __dirname})
})

app.get('/identity/:nrp', (req, res) => {
    res.send(`Mahasiswa dengan NRP ${req.params.nrp} dan jurusan ${req.query.jurusan}`)
    // http://localhost:3000/identity/50336?jurusan=teknikinformatika
    // "?" adalah query
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})