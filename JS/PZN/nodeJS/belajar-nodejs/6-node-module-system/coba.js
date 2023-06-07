// fungsi
function cetakNama(nama) {
    return `Halo nama saya ${nama}`
};

// variabel
let PI = 3.1421;

// objek
const mahasiswa = {
    nama: "Pidi Baiq",
    umur: 19,
    cetakMhs() {
        return `namaku ${this.nama} umur ${this.umur} tahun`
    }
};

class Person {
    constructor() {
        console.log(`Class Telah Dibuat!!`)
    }
}


// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Person = Person;

module.exports = {cetakNama, PI, mahasiswa, Person}
