import Note from "../note.jpg";
import Singing from "../singing.jpg";

export default function Nav({ setSong }) {
  function handleClick(event) {
    const artist = document.getElementById("artist_box").value;
    const title = document.getElementById("title_box").value;
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setSong(r))
      .catch((e) => setSong(null));
  }
  return (
    <div id="computer">
      Artist :<input id="artist_box" />
      Title :<input id="title_box" />
      <button onClick={handleClick}>Generate Lyrics</button>
    </div>
  );
}
