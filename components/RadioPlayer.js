import ReactAudioPlayer from "react-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

function RadioPlayer({ radio }) {
  const [num, setNum] = useState(0);

  let incNum = () => {
    if (num < 50) {
      setNum(num + 1);
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
      <h1 className=" text-center text-slate-900 tracking-wide text-4xl pt-5 font-semibold">
        {radio.data[num]?.name}
      </h1>
      <h3 className="text-slate-800 text-center">{radio.data[num]?.country}</h3>
      <ReactAudioPlayer
        src={radio.data[num]?.url_resolved}
        autoPlay={true}
        controls
        controlsList
        className="m-auto mt-4"
      />

      <div className="gap-5 mt-5 text-center">
        <div className="text-xl bg-slate-900 px-5 py-2 rounded-xl w-40 m-auto transition-all hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <button
            type="button"
            onClick={decNum}
            className="text-slate-100 tracking-wider"
          >
            Back
          </button>
        </div>

        <div className="text-xl bg-slate-900 px-5 py-2 rounded-xl w-40 m-auto mt-5 transition-all hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <button
            type="button"
            onClick={incNum}
            className="text-slate-100 tracking-wider"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RadioPlayer;
