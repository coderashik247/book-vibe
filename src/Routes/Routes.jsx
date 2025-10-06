import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";


export const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>
    }
])