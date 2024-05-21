import { useRef } from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  const inputRef = useRef(null);
  return (
    <div className="">
      <h1 className=" text-4xl text-green-700 font-bold mb-6 text-center">
        Quiz App
      </h1>

      <ul className="text-lg">
        <li>1. You will asked 10 questions one after another.</li>
        <li>2. 10 points is awarded for the correct answer.</li>
        <li>3. Each question has 3 options. You can choose only one option.</li>
        <li>
          4. You can review and change the answers before the quiz finish.
        </li>
        <li>5. The result will be declared at the end of the quiz.</li>
      </ul>

      <form className="flex items-center justify-center">
        <input
          className="text-black w-[300px] px-4 py-1 rounded-md mt-12 outline-green-700"
          type="text"
          required
          placeholder="Username*"
          ref={inputRef}
        />
      </form>

      <div className=" flex justify-center mt-6">
        <Link
          className=" bg-yellow-400 hover:bg-yellow-600 font-semibold text-black p-2 rounded-md text-center "
          to={"/quiz"}
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};
