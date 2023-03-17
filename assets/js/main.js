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
const popularMoviesElem = document.getElementById('popular-movies');

const topMoviePath = '/movie/top_rated';
const topPopularPath = '/movie/popular';

function insertMovie(path, elem) {
    movieApi.getApiMovie(path).then((movieList = []) => {
        const listMovie = movieList.map((topMovie) => convertTopMoviesToHTML(topMovie))
        const listMovieHTML = listMovie.join('')
        elem.innerHTML = listMovieHTML
    })
}

insertMovie(topMoviePath, topMoviesElem);
insertMovie(topPopularPath, popularMoviesElem);

