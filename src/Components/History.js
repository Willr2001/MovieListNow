import React, { useState } from "react";
import { db } from "../Services/Firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function History({ setMovie, user }) {
    const [movies, setMovies] = useState(null);

    const q = query(
        collection(db, "Movie search"),
        where("email", "==", user.email)
    );

    getDocs(q).then((data) => {
        const returnedMovies = [];
        data.forEach((doc) => {
            returnedMovies.push(doc.data().movie);
        });
        setMovies(returnedMovies);
    });

    if (!movies) {
        return <h1>Loading Data</h1>;
    }

    return (
        <React.Fragment>
            <ul>
                {movies.map((m) => (
                    <li key={m.imdbID} onClick={(e) => setMovie(m)}>
                        {m.Title}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}
