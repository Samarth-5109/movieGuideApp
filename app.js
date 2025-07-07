const searchBox= document.querySelector("#search-box");
const searchBtn=document.querySelector(".search-btn")
const moviePoster=document.querySelector(".movie-poster")
const movieName=document.querySelector(".movie-name")
const movieRating=document.querySelector(".rating")
const minAge= document.querySelector(".age")
const realeaseYear=document.querySelector(".year")
const movieDuration=document.querySelector(".duration")
const movieGenre=document.querySelectorAll(".gen")
const moviePlot=document.querySelector(".about-plot")
const movieCast=document.querySelector(".cast-names")

let url = `http://www.omdbapi.com/?t=${movieName}&apikey=7cc622a9`;

function getMovieDetails(movie){
  return `http://www.omdbapi.com`+`/?t=${movie}`+ `&apikey=7cc622a9`;
}

searchBtn.addEventListener("click", function(){
    let searchBoxValue = searchBox.value;
   // console.log(searchBoxValue)

   fetch(getMovieDetails(searchBoxValue))
   .then((res)=>res.json())
   .then(data=>{
    console.log(data)
    console.log(data.Title)
    movieName.innerHTML=data.Title;
    moviePoster.src=data.Poster;
    movieRating.innerHTML=data.imdbRating;
    minAge.innerHTML=data.Rated;
    realeaseYear.innerHTML=data.Year ;
    movieDuration.innerHTML=data.Runtime;
    moviePlot.innerHTML=data.Plot;
    movieCast.innerHTML=data.Actors;
    movieGenre.forEach((genreElement, index)=>{
      const genres=data.Genre.split(",")
      if(genres[index]){
        genreElement.innerHTML=genres[index];
      }else{
        genreElement.innerHTML=""
      }
    })
   })
    
})

