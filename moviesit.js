// https://www.omdbapi.com/?apikey=45f0782a&s=

var movieNameElement = document.getElementById("movie-name");
var searchButton = document.getElementById("search-btn");
var movieWrapper = document.getElementById("movie-wrapper");
var movieStatus = document.getElementById("movie-status");
{/* <div class="movie-card">
    <img class="movie-thumbnail"
        src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg">
        <p><b>Title</b>:batman</p>
        <p><b>Release year</b>:2005</p>
</div> */}

searchButton.addEventListener("click", function () {
    movieWrapper.innerHTML = ""
    movieStatus.innerText = "Loading....."
    $.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieNameElement.value}`, function (response) {
        movieStatus.innerText = ""
        if (response.Response == "True") {
            console.log(response);
            var movies = response.Search;
            for (var i = 0; i < movies.length; i++) {
                movieWrapper.innerHTML += `
            <div class="movie-card">
    <img
     class="movie-thumbnail"
        src="${movies[i].Poster}"/>
       
        <p><b>Title</b>:${movies[i].Title}</p>
        <p><b>Release Year</b>:${movies[i].Year}</p >
</div >
               `
            }
        } else {
            movieStatus.innerText = "404 Movies not found"

        }

    });
});