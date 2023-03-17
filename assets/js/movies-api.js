const movieApi = {}
const API_KEY = '898915155b5e55642efcc67317e973a0';
const version = 3;
const language = 'pt-BR';

function getUrl(path) {
    return `https://api.themoviedb.org/${version}/${path}?api_key=${API_KEY}&language=${language}`
}

movieApi.getApiMovie = (path) => {
    const url = getUrl(path)

    return fetch(url)
    .then((response) => response.json() 
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error)))
}