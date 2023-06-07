// 1 objek
// const mhs = {
//     nama: 'Urvan Gibran',
//     umur: 19,
//     nrp: '5025221172',
//     email: 'urvngiba@gmail.com'
// };

// const el = `<div class="mhs">
//     <h1>${mhs.nama}</h1>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// document.body.innerHTML = el;

//array of object
// const mhs = [
//     {
//         nama: 'urvan',
//         nrp: '502'
//     },
//     {
//         nama: 'gibran',
//         nrp: '132'
//     },
//     {
//         nama: 'abra',
//         nrp: '646'
//     },
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m =>`
//     <ul>
//         <li>${m.nama}</li>
//         <li>${m.nrp}</li>
//     </ul>
//     `).join("")}
// </div>`

// document.body.innerHTML = el;


//for tenary expression
// const lagu = {
//     judul: 'Lagunya begini nadanya begitu',
//     penyanyi: 'Jason Ranti',
//     feat: 'Pidi Baiq'
// }

// const el = `<div class="lagu">
//     <p>Judul: ${lagu.judul}</p>
//     <span>Penyanyi: ${lagu.penyanyi} ${lagu.feat ? `featuring ${lagu.feat}` : ``}</span>
// </div>`

// document.body.innerHTML = el;

const mhs = {
    nama: 'Urvan Gibran',
    semester: 5,
    mataKuliah: [
        'Struktur Data',
        'Dasar Pemograman',
        'Sistem Digital',
        'Fisika 2',
        'Matematika2'
    ]
}

function cetakMataKuliah(matKul) {
    return `<ul>
        ${matKul.map(mk => `<li>${mk}</li>`).join("")}
    </ul>`
}


//menggunakan langsung di elemen
// const el = `<div class="mhs">
//     <h1>${mhs.nama}</h1>
//     <p>Semester ${mhs.semester}</p>
//     <ul>
//         ${mhs.mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ul>
// </div>`

//memakai function 
const el = `<div class="mhs">
    <h1>${mhs.nama}</h1>
    <p>Semester ${mhs.semester}</p>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`


document.body.innerHTML = el;
