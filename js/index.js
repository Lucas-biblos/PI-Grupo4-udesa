let apiKey = "e085a8d4a0502afc1d3c8e65c53af130";

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