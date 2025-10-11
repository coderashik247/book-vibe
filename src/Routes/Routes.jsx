import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PageToRead from "../pages/PageToRead/PageToRead";
import Books from "../pages/Books/Books";
import BookDetails from "../components/BookDetails/BookDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <Books></Books>,
        // loader: () => fetch('/public/booksData.json')booksData.json
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
        
      },

      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "pageToRead",
        element: <PageToRead></PageToRead>,
        loader: () => fetch('/booksData.json')
      },
    ],
  },
]);
