// Core Modules
// File System
const { isUtf8 } = require('buffer');
const fs = require('fs');


// // Write File Synchronous
// try {
//     fs.writeFileSync("test.txt", "Hello World With Synchronous");
// } catch (e) {
//     console.log(e);
// }

// //Write File Asynchronous
// fs.writeFile("testAsycn.txt", "FIle dibuat secara Async", (err) => {
//     if (err) throw err;
//     console.log('Data berhasil');
// })

// //Read File Sync
// console.log(fs.readFileSync('test.txt', 'utf-8'));

// const data = fs.readFile('testAsycn.txt', 'utf-8' ,(err , data) => {
//     if (err) throw err;
//     console.log(data);
// })

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fileData = './data';
if (!fs.existsSync(fileData)) {
    fs.mkdirSync(fileData);
}

const dataContacts = './data/contacts.json';
if (!fs.existsSync(dataContacts)) {
    fs.writeFileSync(dataContacts, '[]', 'utf-8');
}

const Question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

// const pertanyaan1 = () => {
//     return new Promise((resolved, rejected) => {
//         rl.question("Masukkan nama anda: ", (nama) => {
//             resolved(nama);
//         })
//     })
// }

// const pertanyaan2 = () => {
//     return new Promise((resolved, rejected) => {
//         rl.question("Berapa umur anda: ", (umur) => {
//             resolved(umur);
//         })
//     })
// }

const main = async () => {
    const nama = await Question('Siapa nama anda: ');
    const umur = await Question('Berapa umur anda: ');
    const noHP = await Question('Berapa nomor HP mu: ')

    const contact = { nama, umur, noHP };
    const fileContacts = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
    fileContacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify((fileContacts)))

    console.log("Terimakasih Sudah Mengisi Data!");
    rl.close();
}

main();

// Problemnya bakal terjadi kalo pertanyaan semakin banyak yang menyebabkan Callback HELL //
// rl.question("Masukkan nama anda: ", (nama) => {
//     rl.question("Berapa usia anda: ", (umur) => {
//         const contact = { nama, umur };
//         const fileContacts = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
//         fileContacts.push(contact)
//         fs.writeFileSync('data/contacts.json', JSON.stringify((fileContacts)))

//         console.log("Terimakasih Sudah Mengisi Data!");
//         rl.close();
//     });
// });



