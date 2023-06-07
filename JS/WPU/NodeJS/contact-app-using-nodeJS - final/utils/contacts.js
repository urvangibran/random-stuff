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

const saveContact = (newContacts) => {
    fs.writeFileSync('./data/contact.json', JSON.stringify(newContacts), 'utf-8')
}

//fungsi tambah data
const addContact = (body) => {
    const contacts = loadContacts();
    contacts.push(body);
    saveContact(contacts)
}

// fungsi tambah data WPU 
// sama cuma baagian fs.write dipisah

const cekDuplikat = (data) => {
    const contacts = loadContacts();
    return contacts.find((contact) => contact.nrp === data)
}

const deleteContact = (nrp) => {
    const contacts = loadContacts();
    const filteredContacts = contacts.filter((contact) => contact.nrp !== nrp)
    saveContact(filteredContacts)
    // console.log(filteredContacts)
}

const updateContacts = (newMHS) => {
    const contacts = loadContacts();
    const filteredContacts = contacts.filter((contact) => contact.nrp !== newMHS.oldNRP)
    delete newMHS.oldNRP
    filteredContacts.push(newMHS);
    saveContact(filteredContacts);
}   

module.exports = { loadContacts, findContact, addContact, cekDuplikat, deleteContact, updateContacts }