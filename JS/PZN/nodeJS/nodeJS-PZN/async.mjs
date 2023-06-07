function samplePromise() {
    return Promise.resolve("OK!")
}

const nama = await samplePromise()
console.log(nama);