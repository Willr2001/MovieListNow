import { useState } from "react";
import "./styles.css";
import Title from "./Title";
import Nav from "./Nav";
import Info from "./Info";
import Footer from "./Footer";
import Pictures from "./Pictures";
export default function App() {
  const [song, setSong] = useState("");

  return (
    <div className="App">
      <Title title="Movie Suggester" />
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
