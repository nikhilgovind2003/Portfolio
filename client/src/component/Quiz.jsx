import { Questions } from "./Questions";

export const Quiz = () => {
  return (
    <div>
      <h1 className=" text-4xl text-green-700 font-bold text-center">
        Quiz App
      </h1>
      <div className=" overflow-hidden h-[200px]">
        <Questions />
      </div>
    </div>
  );
};
