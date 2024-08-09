import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";

const App = () => {
  return (
    <div id="app" className="font-roboto bg-zinc-900 min-h-screen text-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
