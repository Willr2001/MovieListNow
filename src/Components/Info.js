import { collection, deleteDoc, addDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Services/Firebaseconfig";
import { useState } from "react";
const baseurl = "http://www.omdbapi.com";
const apikey = "apikey=4e4b7fb6";

export async function deleteMovie(id) {
  await deleteDoc(doc(db, "Movie search", id));
}

export default function Info({ movie, user, remover }) {
  const [movieID, setMovieID] = useState(null);

  const addMovie = (e) => {
    e.preventDefault();
    const query = `${baseurl}/?t=${movie.Title}&${apikey}`;

    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        const payload = {
          email: user.email,
          movie: {
            Poster: data.Poster,
            Title: data.Title,
            Year: data.Year,
            IMDBRating: data.imdbRating,
            Director: data.Director,
            Actors: data.Actors,
            Genre: data.Genre,
            Rated: data.Rated,
            Runtime: data.Runtime,
            Plot: data.Plot,
          },
        };
        let doc = addDoc(collection(db, "Movie search"), payload);
        setMovieID(doc.id);
      });
  };
  if (movie) {
    return (
      <div class="movieLoad">
        <img class="poster" src={movie.Poster} alt="Movie Poster"></img>
        <div class="movie">
          <div class="topbar">
            <button onClick={addMovie}>Add to List</button>
            <div class="Mtitle">{movie.Title}</div>
            <button onClick={remover}>Delete from List</button>
          </div>
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
