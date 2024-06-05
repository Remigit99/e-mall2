
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    // errorElement:
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
