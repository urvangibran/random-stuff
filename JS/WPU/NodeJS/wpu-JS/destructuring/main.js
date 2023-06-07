// Destructuring

// function tambahKali(a, b) {
//     return [a + b, a * b];
// }

// const [jumlah, kali]= tambahKali(2, 3)

// console.log(jumlah);
// console.log(kali);

// object destructuring
// function kalkulasi (a, b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {kurang, bagi, kali, tambah} = kalkulasi(2,3);
// console.log(kurang)

//destructuring arguments
const mhs1 = {
    nama: "Urvan Gibran",
    semester: 5,
    Nilai: {
        Dasprog: {
            UTS: 80,
            UAS: 90
        },
        Strukdat: {
            UTS : 100,
            UAS: 95
        },
        Bindo: 'B'
    }
}

function display({nama, semester, Nilai: {Dasprog : {UTS : UTS_Dasprog, UAS : UAS_Dasprog}, Strukdat :{UTS : UTS_Strukdat, UAS : UAS_Strukdat}, Bindo}}) {
    return `Halo nama saya ${nama}, saya semester ${semester}
dengan detail nilai Dasar Pemograman: UTS ${UTS_Dasprog} dan UAS ${UAS_Dasprog}, Struktur Data: UTS ${UTS_Strukdat}
dan UAS ${UAS_Strukdat} dan Bahasa Indonesia: ${Bindo}`
}

console.log(display(mhs1))