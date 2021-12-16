import React, { useEffect, useState } from "react";
import { db } from "../Services/Firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function History({ setMovie, user, showing }) {
  const [movies, setMovies] = useState(null);

  const q = query(
    collection(db, "Movie search"),
    where("email", "==", user.email)
  );

  useEffect(() => {
    getDocs(q).then((data) => {
      const returnedMovies = [];
      data.forEach((doc) => {
        returnedMovies.push(doc.data().movie);
      });
      setMovies(returnedMovies);
      console.log(movies);
    });
  }, [movies]);

  if (!movies) {
    return <h1>No movies in your list!</h1>;
  }

  return showing ? (
    <React.Fragment>
      <div class="movieHC">
        {movies.map((m) => (
          <div class="movieHist" key={m.imdbID} onClick={(e) => setMovie(m)}>
            {m.Title}
          </div>
        ))}
      </div>
    </React.Fragment>
  ) : (
    ""
  );
}
