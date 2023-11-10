let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let urlTopRatedMovies= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let urlPopularMovies= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyy}`;
let urlTopRatedSeries= `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;
let urlPopularSeries= `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;


fetch(urlTopRatedMovies)

.then(function(response) {
    return response.json();
})

.then(function(data) {
     console.log(data)

})

.catch(function(errors) {
    console.log(errors);
});




fetch(urlPopularMovies)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data)
})
.catch(function(errors) {
    console.log(errors);
});




fetch(urlTopRatedSeries)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data)
})
.catch(function(errors) {
    console.log(errors);
});





fetch(urlPopularSeries)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data)
})
.catch(function(errors) {
    console.log(errors);
});