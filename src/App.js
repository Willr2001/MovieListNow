import React, { useState, useRef } from "react";
import "./styles.css";
import Info from "./Components/Info";
import Pictures from "./Components/Pictures";
import Nav from "./Components/Nav";
import History from "./Components/History";
import { SignIn, SignOut, useAuthentication } from "./Services/authService";
import { db } from "./Services/Firebaseconfig";
import { collection, doc, addDoc } from "firebase/firestore";

const baseurl = "http://www.omdbapi.com";
const apikey = "apikey=4e4b7fb6";

export default function App() {
  const [movie, setMovie] = useState(null);
  const movieSearchText = useRef();
  const user = useAuthentication();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = `${baseurl}/?t=${movieSearchText.current.value}&${apikey}`;

    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        const payload = {
          email: user.email,
          movie: data,
        };
        addDoc(collection(db, "Movie search"), payload);
      });
  };

  if (!user) {
    return (
      <div className="App">
        <header>
          <div class="title">Movie List Now</div>
          <div class="signInOut">
            {!user ? <SignIn /> : <SignOut clear={() => setMovie(null)} />}
          </div>
        </header>
        <div class="intro">
          Hey! Welcome to our Movie List Creator. To get started, log into our
          website using your Google Account and then search up a movie.
          Afterwards, feel free to tweak your personal movie list :)
        </div>
        <Pictures />
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <div class="title">Movie List Now</div>
        <div class="signInOut">
          {!user ? <SignIn /> : <SignOut clear={() => setMovie(null)} />}
        </div>
      </header>
      <History setMovie={setMovie} user={user} />
      <Nav />
      <form class="Search" onSubmit={handleSearch}>
        <input type="text" placeholder="Movie Title" ref={movieSearchText} />
        <input type="submit" value="Search" />
      </form>
      <Info movie={movie} />
    </div>
  );
}
