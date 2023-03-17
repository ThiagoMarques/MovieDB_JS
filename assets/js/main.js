const urlImage = `https://image.tmdb.org/t/p/original`

function convertTopMoviesToHTML(movie) {
    return `
    <div class="section__movie">
        <div class="section__movie-image">
            <img
                src="${urlImage}/${movie.poster_path}"
                alt="Poster do filme ${movie.title}"
            />
        </div>
        <div class="section__movie-details">
            <li class="details__title">${movie.title}</li>
            <li class="details__original-language">Linguagem: ${movie.original_language}
            </li>
            <li class="details__vote-average">Avaliação: ${movie.vote_average}</li>
        </div>
    </div>`
}

const topMoviesElem = document.getElementById('top-movies');

movieApi.getApiMovie('/movie/top_rated').then((topMoviesList = []) => {
    const topMovies = topMoviesList.map((topMovie) => convertTopMoviesToHTML(topMovie))
    const topMoviesHTML = topMovies.join('')
    topMoviesElem.innerHTML = topMoviesHTML
})

const popularMoviesElem = document.getElementById('popular-movies');

movieApi.getApiMovie('/movie/top_rated').then((popularMoviesList = []) => {
    console.log('popularMoviesList', popularMoviesList)
    const popularMovies = popularMoviesList.map((popularMovie) => convertTopMoviesToHTML(popularMovie))
    const popularMoviesHTML = popularMovies.join('')
    popularMoviesElem.innerHTML = popularMoviesHTML
})