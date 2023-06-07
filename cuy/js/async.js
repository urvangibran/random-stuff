const token = ~~[Math.random() * 123456789]
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log("login processing...");
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username != "gibran") failed("sorry, wrong username");
            success({ token });
        }, 500)
    })
}

function getApikey(token) {
    console.log('get apikey processing...')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (!token) failed("sorry, nothing token can accessed")
            success({ apikey: "key9090" });
        }, 1000);
    })
}

function getPictures(apikey) {
    console.log("get pictures processing...")
    return new Promise((success, failed) => {
        if (!apikey) failed("apikey can't accessed")
        success({ pic: pictures })
    })
}

async function userDisplay() {
    try {
        const { token } = await login("gibran")
        const { apikey } = await getApikey(token)
        const { pic } = await getPictures(apikey)

        console.log(`
        token anda adalah ${token}
        Apikey anda adalah ${apikey}
        dengan apikey kamu dapat mengakses gambar berupa: ${pic}
        `)
    } catch(err) {
        console.log(err);
    }
}

userDisplay()