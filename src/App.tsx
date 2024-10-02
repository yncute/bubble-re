import "./App.css";
import router from "./routes/router.tsx";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Initial Load...</p>}
    ></RouterProvider>
  );
}

export default App;
