import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import HomePage from "../components/Homepage/homepage.jsx";
import PopularBook from "../components/PopularBook/popularBooks.jsx";
import ErrorPage from "../components/Error Page/Errorpage.jsx";
import NewBooks from "../components/addBooks/newBooks.jsx";
import BookDetails from "../components/Books/bookdetails.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewMore from "../components/ViewMore/viewMore.jsx";
import Category from "../components/Categories/category.jsx";
//Routing Configuraton
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/browsebooks",
        element: <BookDetails />,
      },
      {
        path: "/books",
        element: <BookDetails />,
      },
      {
        path: "/popularBooks",
        element: <PopularBook />,
      },
      {
        path: "/addbooks",
        element: <NewBooks />,
      },
      {
        path: "/Addbooks",
        element: <NewBooks />,
      },
      {
        path: "/AddBooks",
        element: <NewBooks />,
      },
      {
        path: "/books/:id",
        element: <ViewMore />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
