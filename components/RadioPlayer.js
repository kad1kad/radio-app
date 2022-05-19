import ReactAudioPlayer from "react-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

function RadioPlayer({ radio }) {
  console.log(radio);

  const [num, setNum] = useState(0);

  let incNum = () => {
    if (num < 50) {
      setNum(Number(num) + 1);
    }
  };

  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="max-w-md m-auto">
      <ReactAudioPlayer
        src={radio.data[num].url_resolved}
        autoPlay
        controls
        id={radio.data[num].name}
        className="m-auto mt-4"
      />

      <h1 className="text-center text-xl mt-3 font-semibold">
        {radio.data[num].name}
      </h1>
      <div className=" gap-5 mt-5 text-center">
        <div className="text-xl bg-slate-200 px-5 rounded-3xl w-40 m-auto">
          <button type="button" onClick={decNum}>
            Back
          </button>
        </div>

        <div className="text-xl bg-slate-200 px-5 rounded-3xl w-40 m-auto mt-5">
          <button type="button" onClick={incNum}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RadioPlayer;
