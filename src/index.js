// // we are the victim, detective, and perp
// // lots of hints in #1: for each - need to deal w array; create an image - html; see a url, know we need fetch
// // #2: [0] in an array (first movie); details??; we have everything - no need to create in this
// // #3: click = event handler; top nav - images i made
// // #4: 
// // #5: update data from current movie variable

let allMovies = []
let currentMovie

const movieListNav = document.getElementById('movie-list')
const movieTitle = document.getElementById('title')
const movieImage = document.getElementById('detail-image')
const movieYearReleased = document.getElementById('year-released')
const movieDesc = document.getElementById('description')
const movieWatched = document.getElementById('watched')
const movieBlood = document.getElementById('amount')
const movieDrops = document.getElementById('blood-form')
const inputBlood = document.getElementById('blood-amount')

fetch('http://localhost:3000/movies')
.then((response) => response.json())
.then((movieData) => {
    allMovies = movieData
    currentMovie = allMovies[0]

    renderImage()
    renderDetails()
    watchedButton()
    bloodFormSubmit()

})

const renderImage = () => {
    allMovies.forEach((movie) => {
        let movieImage = document.createElement('img')
        movieImage.src = movie.image
        movieListNav.append(movieImage)
        movieImage.addEventListener('click', (e) => {
            currentMovie = movie
            renderDetails()
        })
    })
}

 const renderDetails = () => {
    movieTitle.textContent = currentMovie.title
    movieImage.src = currentMovie.image
    movieYearReleased.textContent = currentMovie.release_year
    movieDesc.textContent = currentMovie.description
    movieWatched.textContent = currentMovie.watched ? "Watched" : "Unwatched"
    movieBlood.textContent = currentMovie.blood_amount
 }

 const watchedButton = () => {
    movieWatched.addEventListener('click', (e) => {
        currentMovie.watched = !currentMovie.watched
        movieWatched.textContent = currentMovie.watched ? "Watched" : "Unwatched"
    })
 }

 const bloodFormSubmit = () => {
    movieDrops.addEventListener('submit', (e) => {
        e.preventDefault()
        const newValue = parseInt(inputBlood.value)
        if (!isNaN(newValue)) {
        currentMovie.blood_amount += newValue
        movieBlood.textContent = currentMovie.blood_amount
        }
    })
}
