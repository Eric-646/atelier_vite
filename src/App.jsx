import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import Ticket from "./pages/Ticket.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/header", element: <Header /> },
  { path: "/ticket/:id", element: <Ticket /> },
]);
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
