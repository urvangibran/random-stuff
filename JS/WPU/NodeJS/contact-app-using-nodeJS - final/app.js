const express = require('express')
const { body, validationResult, check } = require('express-validator')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const { loadContacts, findContact, addContact, cekDuplikat, deleteContact, updateContacts } = require ('./utils/contacts')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require ('connect-flash')
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)

// built-in middleware (public file static)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
app.use(flash())


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
    res.render('index', {
        nama: "Gibran",
        mahasiswa,
        title: "Halaman Utama",
        layout: "./layouts/main-layout"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        layout: "./layouts/main-layout"
    })
})

app.get('/contact', (req, res) => {
    const contacts = loadContacts()
    res.render('contact', {
        title: "Contact",
        layout: "./layouts/main-layout",
        contacts,
        msg: req.flash('msg'),
    })
})

//form data
app.post('/contact', 
    body('nrp').custom((value) => {
        const duplikat = cekDuplikat(value);
        const isNumber = isNaN(value);
        console.log(isNumber)
        if(duplikat) {
            throw new Error('NRP sudah dipakai')
        } else if (isNumber) {
            throw new Error('NRP bukan angka')
        } else {
            return true;
        }
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    
    (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(400).json({errors : errors.array()});
        res.render('addForm', {
            title: "Form Tambah Data",
            layout: "./layouts/main-layout",
            errors: errors.array(),
        })
    } else {
        addContact(req.body)
        // kirim flash
        req.flash('msg', 'Data mahasiswa berhasil ditambahkan')
        res.redirect('/contact')
    }
})

// Halaman Form Tambah Data
app.get('/contact/add', (req, res) => {
    res.render('addForm', {
        title: "Form Tambah Data",
        layout: "./layouts/main-layout",
    })
})

//Halaman Hapus
app.get('/contact/delete/:nrp', (req, res) => {
    const data = req.params.nrp
    const contact = findContact(data)

    // validasi ada kontak
    if(!contact) {
        res.render('not_found', {
            title: "Not Found",
            layout: "./layouts/not_found.ejs",
        })
    } else {
        deleteContact(data);
        req.flash('msg', 'Data mahasiswa berhasil dihapus')
        res.redirect('/contact');
    }
})

// Halaman form ubah data
app.get('/contact/edit/:nrp', (req, res) => {
    const contact = findContact(req.params.nrp)
    res.render('editForm', {
        title: "Form Edit Data",
        layout: "./layouts/main-layout",
        contact,
    })
})

//proses ubah data
app.post('/contact/update', 
    body('nrp').custom((value, {req}) => {
        const duplikat = cekDuplikat(value);
        const isNumber = isNaN(value);
        if(value !== req.body.oldNRP && duplikat) {
            throw new Error('NRP sudah dipakai')
        } else if (isNumber) {
            throw new Error('NRP bukan angka')
        } else {
            return true;
        }
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    
    (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(400).json({errors : errors.array()});
        res.render('editForm', {
            title: "Form Ubah Data",
            layout: "./layouts/main-layout",
            errors: errors.array(),
            contact: req.body,
        })
    } else {
        updateContacts(req.body)
        // kirim flash
        req.flash('msg', 'Data mahasiswa berhasil diubah')
        res.redirect('/contact')
    }
})

// Halaman detail data
app.get('/contact/:nrp', (req, res) => {
    const contact = findContact(req.params.nrp)
    res.render('detail', {
        title: "Detail Contact",
        layout: "./layouts/main-layout",
        contact,
    })
})

// app.get('/identity/:nrp', (req, res) => {
//     res.send(`Mahasiswa dengan NRP ${req.params.nrp} dan jurusan ${req.query.jurusan}`)
// })

app.use('/', (req, res) => {
    res.render('not_found', {
        title: "Not Found",
        layout: "./layouts/not_found.ejs",
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})