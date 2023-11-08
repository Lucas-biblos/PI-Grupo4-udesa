let apiKey = "055556ae06143e409a5fa45eab6c68d1";

url = "https://api.themoviedb.org/3/search/movie?query=Avengers"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer 055556ae06143e409a5fa45eab6c68d1"
}

response = requests.get(url, headers=headers);


let urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
let urlValoradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
let urlGeneros = `https://api.themoviedb.org/3/movie/list?api_key=${apiKey}`


fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {

})
.catch(function(errors) {
    console.log(errors);
});