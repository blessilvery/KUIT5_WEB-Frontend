import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Stores from "./routes/Stores.jsx"
import Cart from "./routes/Cart.jsx"
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children:[
            {
                path:"/store",
                // path:"/store/:storeId",
                element: <Stores />
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ]
    },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
