const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.set('view engine', 'ejs')

//third-party middleware
app.use(morgan('dev'))

// built-in middleware (public file static)
app.use(express.static('public'))

// app-level middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Urvan Gibran',
            umur: 19
        },
        {
            nama: 'Januar Eko',
            umur: 31
        },
        {
            nama: 'Alfito',
            umur: 1
        },
    ]
    res.render('index', {nama:   "Gibran", mahasiswa, title: "Halaman Utama"})
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact"
    })
})

app.get('/identity/:nrp', (req, res) => {
    res.send(`Mahasiswa dengan NRP ${req.params.nrp} dan jurusan ${req.query.jurusan}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})