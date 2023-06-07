const { isUtf8 } = require('buffer');
const fs = require('fs');

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

const writeContacts = (nama, umur, noHP) => {    
    const contact = { nama, umur, noHP };
    const fileContacts = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
    fileContacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify((fileContacts)))
    
    console.log("Terimakasih Sudah Mengisi Data!");
    rl.close();
}

module.exports = {Question, writeContacts}



