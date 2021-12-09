import React, { useState, useRef } from "react";
import "./styles.css";
import Title from "./Title";
import Info from "./Components/Info";
import Pictures from "./Components/Pictures";
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
    if (!user) {
        return (
            <React.Fragment>
                <span>Please Sign In</span>
                <SignIn />
            </React.Fragment>
        );
    }

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

    return (
        <div className="App">
            <Title title="Movie Search" />
            <header>
                {!user ? <SignIn /> : <SignOut clear={() => setMovie(null)} />}
            </header>
            <History user={user} setMovie={setMovie} />
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Movie Title"
                    ref={movieSearchText}
                />
                <input type="submit" value="Search" />
            </form>
            <Pictures />
            <Info movie={movie} />
        </div>
    );
}