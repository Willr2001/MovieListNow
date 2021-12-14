import Search from "../Magnifying-Glass.png";
import Movie from "../Movie-Night.jpg";

export default function Pictures() {
  return (
    <div class="pictures">
      <img
        id="left"
        src={Search}
        alt="Magnifying Glass"
        width="150"
        height="150"
        hspace="20%"
      />
      <img
        id="right"
        src={Movie}
        alt="Movie Image"
        width="220"
        height="150"
        hspace="20%"
      />
    </div>
  );
}
