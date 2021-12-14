export default function Info({ movie }) {
  if (movie) {
    return (
      <div class="movieLoad">
        <img class="poster" src={movie.Poster} alt="Movie Poster"></img>
        <div class="movie">
          <div class="Mtitle">{movie.Title}</div>
          <div class="year">{movie.Year}</div>
          <div class="imdb">{"IMDB Rating : " + movie.imdbRating}</div>
          <div class="info">{"Director(s) : " + movie.Director}</div>
          <div class="info">{"Actor(s) : " + movie.Actors}</div>
          <div class="info">{"Genre(s) : " + movie.Genre}</div>
          <div class="info">{"Rated : " + movie.Rated}</div>
          <div class="info">{"Runtime : " + movie.Runtime}</div>
          <div class="info">{"Plot Preview : " + movie.Plot}</div>
        </div>
      </div>
    );
  } else {
    return <div class="intro">Search a movie or view your movie list</div>;
  }
}
