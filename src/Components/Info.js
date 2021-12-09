export default function Info({ movie }) {
  if (movie) {
      return <div>{JSON.stringify(movie)}</div>; // Style this nicer
  } else {
      return <div>Search a movie or select on of your past searches</div>;
  }
}
