let apiKey = "055556ae06143e409a5fa45eab6c68d1";

let urlTopRatedMovies= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let urlPopularMovies= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
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