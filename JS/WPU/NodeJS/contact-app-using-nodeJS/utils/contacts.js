const fs = require('fs')

const pathFile = './data'
if (!fs.existsSync(pathFile)) {
    fs.mkdirSync(pathFile);
}

const pathData = './data/contact.json'
if (!fs.existsSync(pathData)) {
    fs.writeFileSync(pathData, '[]', 'utf-8');
}

const loadContacts = () => {
    const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const findContact = (nrp) => {
    const contacts = loadContacts();
    const contact = contacts.find((contact) => contact.nrp === nrp);
    return contact
}

//fungsi tambah data
const addContact = (body) => {
    const contacts = loadContacts();
    contacts.push(body);
    const newContacts = JSON.stringify(contacts)
    fs.writeFileSync('./data/contact.json', newContacts, 'utf-8')
}

// fungsi tambah data WPU 
// sama cuma baagian fs.write dipisah

const cekDuplikat = (data) => {
    const contacts = loadContacts();
    return contacts.find((contact) => contact.nrp === data)
}

module.exports = { loadContacts, findContact, addContact, cekDuplikat }