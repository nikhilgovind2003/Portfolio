import { useEffect, useState } from "react";
import questions from "../Database/data";

export const Questions = () => {
  const [check, setcheck] = useState(undefined);

  const onChangeCheck = () => {
    console.log("Item checked");
    setcheck(true);
  };

  const setNextBtn = () => {
    console.log("Next btn clicked");
  };

  const setPrevBtn = () => {
    console.log("Prev btn clicked");
  };

  // btn class specifications
  const btnClass =
    "bg-green-400 w-[70px] text-black font-semibold hover:bg-green-800 rounded-sm py-1 px-4 text-center";

  useEffect(() => {
    return () => {};
  }, []);

  // const options = questions.option
  return (
    <div className=" mt-12 pb-12 text-white">
      {questions.map((q, i) => (
        <div  key={i}>
          <h1 className=" mb-6 text-green-500 text-xl">{q.question}</h1>
          <ul className=" mx-12 text-green-500 flex flex-col gap-4">
            <li className=" flex items-center gap-4">
              <input
                type="radio"
                className="text-red-500"
                name="Answer"
                id=""
                checked={check}
                onClick={onChangeCheck}
              />
              <label htmlFor="Option1">{q.options[0]}</label>
            </li>
            <li className=" flex items-center gap-4">
              <input
                type="radio"
                className="text-red-500"
                name="Answer"
                id=""
                checked={check}
                onClick={onChangeCheck}
              />
              <label htmlFor="Option1">{q.options[1]}</label>
            </li>
            <li className=" flex items-center gap-4">
              <input
                type="radio"
                className="text-red-500"
                name="Answer"
                id=""
                checked={check}
                onClick={onChangeCheck}
              />
              <label htmlFor="Option1">{q.options[2]}</label>
            </li>
          </ul>
        </div>
      ))}
      {/* Btn Layout */}
      <div className="flex justify-between mt-12 mb-[-50px]">
        <button
          onClick={setPrevBtn}
          className={`bg-yellow-500 hover:bg-yellow-800 ${btnClass}`}
        >
          Prev
        </button>
        <button onClick={setNextBtn} className={btnClass}>
          Next
        </button>
      </div>
    </div>
  );
};
