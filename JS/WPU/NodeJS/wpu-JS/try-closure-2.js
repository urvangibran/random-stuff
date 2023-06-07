// function ucapkanSalam(time) {
//     return function salam (nama) {
//         console.log(`Halo Pak ${nama}, selamat ${time}, semoga harimu menyenangkan!`);
//     }
// }

// const selamatPagi = ucapkanSalam("pagi");
// const selamatSore = ucapkanSalam("sore");
// const selamatMalam = ucapkanSalam("malam");

// selamatPagi("Gibran");
// selamatSore("Urvan");
// selamatMalam("Addhuha")

// let add = () => {
//     let counter = 0;
//     return () => {
//         return ++counter;
//     }
// }

// let a = add();


// using immediatly invoked function
// ketika diassigned ke variabel add maka otomatis
// akan langsung menjalankan inner function nya
let add = (() => {
    let counter = 0;
    return () => {
        return ++counter;
    }
})();

// ini ada tanda kurung pada fungsi karena akan menjalankan
// fungsi innernya
console.log(add());
console.log(add());
console.log(add());

let sum = ((a, b) => {
    return a + b;
})(10,20);

//ini gaperlu tanda kurung pada fungsi nya karena
// hanya mejalankan fungsi nya bukan innernya
console.log(sum);