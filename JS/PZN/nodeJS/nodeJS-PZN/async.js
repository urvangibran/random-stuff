function samplePromise() {
    return Promise.resolve("OK!")
}

async function run() {
    const nama = await samplePromise()
    console.log(nama);
}

run()