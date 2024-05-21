import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./component/Main";
import { Quiz } from "./component/Quiz";
import { Result } from "./component/Result";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);

  return (
    <div className=" bg-black h-screen pt-24 flex items-center justify-center text-white">
      <div className="w-[600px] px-6 border-yellow-900 border-2 rounded-md py-6">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
