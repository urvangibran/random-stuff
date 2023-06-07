const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.input-keyword')
        const response = await fetch(`http://www.omdbapi.com/?apikey=9dfd5d7f&s=${inputKeyword.value}`)
        const result = await response.json()
        const movies = result.Search
        let cards = '';
        movies.forEach(movie => cards += showCards(movie))
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;

        const modalDetailButton = document.querySelectorAll('.modal-detail-button')
        modalDetailButton.forEach(async (button) => {
            try {
                const imdbID = button.dataset.imdbid
                const response = await fetch(`http://www.omdbapi.com/?apikey=9dfd5d7f&i=${imdbID}`)
                const result = await response.json()
                const movieDetail = showMovieDetail(result);
                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = movieDetail;
            } catch (error) {
                console.log(error)
            }
        })
    } catch (error) {
        console.log(error)
    }
})

function showCards(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" 
                        data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showMovieDetail(movie) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${movie.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                            <h4>${movie.Title} (${movie.Year})</h4>
                            </li>
                            <li class="list-group-item"><strong>Director : </strong> ${movie.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${movie.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${movie.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> ${movie.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}
