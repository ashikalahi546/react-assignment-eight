import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Books from "./Pages/Books";
import Pages from "./Pages/Pages";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import SingleBook from "./Pages/SingleBook";
import ReadBooks from "./Pages/ReadBooks";
import WishlistBooks from "./Pages/WishlistBooks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <Books></Books>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>
          },
          {
            path:'wishlistbooks',
            element:<WishlistBooks></WishlistBooks>
          },
        ]

      },
      {
        path: "/pages",
        element: <Pages></Pages>,
      },

      {
 
        path: '/book/:bookId',
        element: <SingleBook></SingleBook>,
        loader: () => fetch("../fakeData.json"),
  
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
