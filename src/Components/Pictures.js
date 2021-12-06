import Note from "../note.jpg";
import Singing from "../singing.jpg";

export default function Pictures() {
  return (
    <div id="pictures">
      <img
        id="left"
        src={Note}
        alt="music note"
        width="60"
        height="60"
        hspace="20%"
      />
      <img
        id="right"
        src={Singing}
        alt="singing"
        width="100"
        height="60"
        hspace="20%"
      />
    </div>
  );
}
