import { useState } from "react";
import "./styles.css";
import Title from "./Title";
import Nav from "./Components/Nav";
import Info from "./Components/Info";
import Footer from "./Components/Footer";
import Pictures from "./Components/Pictures";
import { SignIn, SignOut, useAuthentication } from "./Services/authService";

export default function App() {
  const [song, setSong] = useState("");
  const user = useAuthentication();

  return (
    <div className="App">
      <Title title="Movie Suggester" />
      <header>{!user ? <SignIn /> : <SignOut />}</header>
      <Pictures />
      <Nav setSong={setSong} />
      <Info song={song} />
      <Footer
        authors="Ryan Nguyen"
        repolink=" https://ryantcnguyen.github.com/moviesuggester"
      />
    </div>
  );
}
