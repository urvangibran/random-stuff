// Synchronous
// const getUserSync = (id) => {
//     const nama = id === 1 ? "Urvan" : "Gibran";
//     return({id : nama});
// }

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const hello = "hello world!";
// console.log(hello)


//asynchronous

const getId = (id, cb) => {
    const time = id === 1 ? 3000 : 2000
    setTimeout(() => {
        const nama = id === 1 ? "Urvan" : "Gibran";
        cb({id : nama})
    }, time)
}

const userSatu = getId(1, (hasil) => {
    console.log(hasil)
});

const userDua = getId(2, (hasil) => {
    console.log(hasil)
});

const hello = "hello world!";
console.log(hello)

