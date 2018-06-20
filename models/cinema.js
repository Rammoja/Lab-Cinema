const Cinema = function (films) {
  this.films = films;

};

Cinema.prototype.getAllFilmsByTitle = function(){
  const filmsTitle = this.films.map((film) => {
   return film.title;
  });

  return filmsTitle;

}

Cinema.prototype.getFilmByTitle = function (filmTitle) {
  const film = this.films.find((film) =>{
    return film.title ===filmTitle;
  });
   return film;
};

Cinema.prototype.getFilmByGenre = function (genre) {
  const filmGenreArray = this.films.filter((film) => {
    return film.genre === genre;
  })
  return filmGenreArray

};

// Cinema.prototype.getFilmByGenre = function (genre) {
//   const filmGenreArray = this.films.filter((film) =>
//     film.genre === genre
//   );
// //   return filmGenreArray
// };

Cinema.prototype.getFilmByYear = function(year){
  const filmYearArray = this.films.filter((film) => {
    return film.year === year
  });
  return filmYearArray;
};

// Cinema.prototype.filmFromYear = function (year) {
//   let condition = null;
//
//   const newFilmYearArray = this.films.map((film) =>{
//     return film.year;
//   });
//     if (newFilmYearArray.includes(year)){
//       condition = true;
//     }
//     else{
//       condition = false;
//     }
//     return condition;
// };

Cinema.prototype.filmFromYear = function (year) {


  const newFilmYearArray = this.films.map((film) =>{
    return film.year;
  });
  return  newFilmYearArray.includes(year);

};


module.exports = Cinema;
