export default function Info({ movie }) {
  if (movie) {
    return (
      <div class="movieLoad">
        <img class="poster" src={movie.Poster} alt="Movie Poster"></img>
        <div class="movie">
          <div class="Mtitle">{movie.Title}</div>
          <div class="info"></div>
        </div>
      </div>
    );
  } else {
    return <div class="intro">Search a movie or view your movie list</div>;
  }
}
