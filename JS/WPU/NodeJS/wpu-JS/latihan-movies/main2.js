// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
// const inputKeyword = document.querySelector('.input-keyword')
fetch("http://www.omdbapi.com/?apikey=9dfd5d7f&s=avengers")
    .then(response => response.json())
    .then(response => {
        const movies = response.Search
        let cards = '';
        movies.forEach(m => cards += showMovieDetail(m))
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;

        //ketika tombol diklik
        const modalDetailButton = document.querySelectorAll('.modal-detail-button')
        modalDetailButton.forEach(btn => {
            btn.addEventListener('click', function () {
                const imdbid = this.dataset.imdbID
                fetch("http://www.omdbapi.com/?apikey=9dfd5d7f&i=" + imdbid)
                    .then(response => response.json())
                    .then(m => {
                        const movieDetail = showMovieDetail(m);
                        const modalBody = document.querySelector('.modal-body');
                        modalBody.innerHTML = movieDetail;
                    })
            })
        }) 
    })
// })


function showMovieDetail(m) {
    return `<div class="col-md-4 my-3">
                <div class="card"">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary">Show Details</a>
                    </div>
                </div>
            </div>`
}