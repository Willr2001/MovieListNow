import { useState } from "react";
import History from "./History";

export default function Nav({ user, setMovie }) {
  const [showing, setShowing] = useState(false);
  return (
    <div class="nav">
      <div class="Stitle">Enter A Movie Name Below!</div>
      <button class="navButton" onClick={() => setShowing(!showing)}>
        Movie List
      </button>
      <History user={user} setMovie={setMovie} showing={showing} />
    </div>
  );
}
