// //ambil semua elemen video
// const videos = Array.from(document.querySelectorAll('[data-duration]'))
// //pisahkan yang ada js lanjutan
// let jsSelect = videos.filter(title => title.textContent.includes("JAVASCRIPT LANJUTAN"))
// //ambil durasinya
// .map(item => item.dataset.duration) // ini namanya chaining
// //ganti ke detik
// .map((video) => {
//     const waktu = video.split(":").map(part => parseInt(part))
//     const total = waktu[0]*60 + waktu[1];
//     return total;
// })
// //jumlahkan
// .reduce((total, cur) => total + cur);
// //ganti ke jam lagi
// const jam = Math.floor(jsSelect / 3600)
// const menit = Math.floor((jsSelect - jam * 3600) / 60)
// const detik = (jsSelect - jam * 3600) - menit * 60


// const pDuration = document.getElementById("total-durasi");
// pDuration.textContent = `${jam} jam ${menit} menit ${detik} detik`
// const pJmlhVideo = document.getElementById('jumlah-video');
// pJmlhVideo.textContent = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length


// atas adalah cara nyontek
const videos = Array.from(document.querySelectorAll("[data-duration]")) ;
const playlistJS = videos
    .filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))
    .map(video => video.dataset.duration)
    .map(video => {
        const parts = video
            .split(":")
            .map(time => parseInt(time))
        const total = parts[0]*60 + parts[1];
        return total;
    })
    .reduce((total, cur) => total + cur)

    const jam = Math.floor(playlistJS / 3600)
    const menit = Math.floor((playlistJS - jam * 3600) / 60)
    const detik = (playlistJS - jam * 3600) - menit * 60

    const spanTotalDuration = document.getElementById("total-durasi")
    spanTotalDuration.textContent = `${jam}:${menit}:${detik}`
    const spanJmlhVideo = document.getElementById("jumlah-video")
    spanJmlhVideo.textContent = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length