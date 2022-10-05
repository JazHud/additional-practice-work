const movieURL = "https://amused-typical-skunk.glitch.me/movies";

/** The C in CRUD: CREATE */
let idMovie = document.getElementById("movieAndRating").value;
let ratingMovie = document.getElementById("movieRating").value;
const movieToPost = {
    title: `${idMovie}`,
    rating: `${ratingMovie}`
}
console.log(document.getElementById("movieAndRating").value);
const postMovie = {
    method: 'POST', // Create a new post
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(movieToPost)
}

function getMovies() {
    fetch(movieURL).then(resp => resp.json()).then(data=>console.log(data));
}

// fetch(movieURL, postMovie).then(getMovies); // This will create a new book in the array

getMovies();
// THIS IS JQUERY
$(function () {

    $("#movieAndRating").on('click', function () {

    });
});

/** THE D IN CRUD -- Delete */

const deleteOptions = {
    method: 'DELETE', // Delete a post
    headers: {
        'Content-Type' : 'application/json'
    }
}
// This will modify
// fetch(movieURL + "/7", deleteOptions).then(getMovies);

$.get(`https://api.themoviedb.org/3/movie/${TMBD_TOKEN}`), {
    url: 'https://api.themoviedb.org/3/movie/76341',
    header: 'Authorization: Bearer' TMBD_TOKEN,
    header: 'Content-Type: application/json;charset=utf-8'
}