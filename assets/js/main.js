const API_KEY = '898915155b5e55642efcc67317e973a0';
const version = 3;
const path = 'movie/popular';
const language = 'pt-BR';
const url = `https://api.themoviedb.org/${version}/${path}?api_key=898915155b5e55642efcc67317e973a0&language=${language}`


fetch(url)
    .then((response) => response.json() 
    .then((jsonBody) => jsonBody.results)
    .then((topMoviesList) => {

        console.log(topMoviesList)
    })
    .catch((error) => console.error(error)))