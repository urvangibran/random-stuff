const http = require('http')
const rupiah = require('rupiah-format')
const host = "127.0.0.1"
const port = 3001

const server = http.createServer(function (request, response) {

    let uang = 500000;
    let beli = 105000;
    let sisa = uang - beli;

    uang = rupiah.convert(uang);
    beli= rupiah.convert(beli);
    sisa = rupiah.convert(sisa);

    const hasil = `Uang saya ${uang} dan beli ${beli} jadi sisa ${sisa}`
    

    response.end(hasil);
})



server.listen(port, host, '', function() {
    console.log('server berhasil')
});