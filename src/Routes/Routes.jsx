import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PageToRead from "../pages/PageToRead/PageToRead";


export const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"listedBooks",
                element:<ListedBooks></ListedBooks>
            },
            {
                path:"pageToRead",
                element:<PageToRead></PageToRead>
            }
        ]
    }
])