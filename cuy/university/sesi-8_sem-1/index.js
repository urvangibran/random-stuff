let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
    const lower = 'abcdefghijklmnopqrstuvxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeric = '0123456789'
    const symbol = '~`!@#$%^&*(){[}]|\"<,>."?/'

    const data = lower + upper + numeric + symbol;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator;
    // console.log(generator);
}

function getPassword() {
    const result = generatePassword(passwordLength.value)
    password.value = result;

    // setTimeout(() => {
    //     alert("Password berhasil di-generate")
    // }, 500)
}

function savePassword() {
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password anda: 
     ${password.value}`))
    saveButton.setAttribute('download', 'MyPassword.txt');
    setTimeout(() => {
        allert("Data sudah disimpan!")
    }, 1000);
}

