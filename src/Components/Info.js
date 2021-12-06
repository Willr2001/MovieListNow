export default function Info({ song }) {
  return !song ? (
    "Enter an valid artist and song title :)"
  ) : song.lyrics ? (
    <div id="lyrics">
      <p>{song.lyrics}</p>
    </div>
  ) : (
    <div id="error">
      {" "}
      <p> {song.error} </p>
    </div>
  );
}
