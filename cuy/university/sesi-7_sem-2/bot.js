const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("answerBox")

let init = 0;

const botSay = () => {
    return [
        "Halo, perkenalkan nama saya bot, siapa nama kamu?"
        // "Perkenalkan nama saya fakebot. Siapa nama kamu?",
        // `Halo ${data?.nama}, berapa usia kamu?`,
        // `Ohhh ${data?.usia}, hobi kamu apa ya?`,
        // `waww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        // `ohhh ${data?.pacar}, ya udah kalau gitu. udahan yah?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

function botStart() {
    init++;
    if(init === 1) {
        console.log({nama: jawaban.value})
    } else if(init === 2) {
        console.log({usia: jawaban.value})
    } else if(init === 3) {
        console.log({hobi: jawaban.value})
    } else if(init === 4) {
        console.log({usia: jawaban.value})
    }
    // console.log("starting bot...")
}

