const API_KEY = '898915155b5e55642efcc67317e973a0';
const version = 3;
let pathTopMovie = 'movie/popular';
const language = 'pt-BR';
const urlMain = `https://api.themoviedb.org/${version}/${pathTopMovie}?api_key=898915155b5e55642efcc67317e973a0&language=${language}`
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

const topMoviesElem = document.getElementById('teste');

fetch(urlMain)
    .then((response) => response.json() 
    .then((jsonBody) => jsonBody.results)
    .then((topMoviesList) => {

        for (let index = 0; index < topMoviesList.length; index++) {
            const topMovie = topMoviesList[index];
            console.log('topMovie', topMovie)
            topMoviesElem.innerHTML += convertTopMoviesToHTML(topMovie)
        }
    })
    .catch((error) => console.error(error)))