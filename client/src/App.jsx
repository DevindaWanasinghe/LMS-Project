import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Headder from "./Components/Headder";
import Footer from "./Components/Footer";
import "./style.scss"
import Grade10Main from "./pages/sub-pages/grade10main";
import Lesson01 from "./pages/sub-pages/lesson01";
import Lesson02 from "./pages/sub-pages/lesson02";
import Lesson03 from "./pages/sub-pages/lesson03";
import Lesson04 from "./pages/sub-pages/lesson04";
import Lesson05 from "./pages/sub-pages/lesson05";
import Lesson06 from "./pages/sub-pages/lesson06";



const Layout = ()=>{
  return (
    <>
      <Outlet />
      
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/courses",
        element:<Courses/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/courses/grade10main",
        element:<Grade10Main/>
      },
      {
        path:"/courses/grade10main/lesson01",
        element:<Lesson01/>
      },
      {
        path:"/courses/grade10main/lesson02",
        element:<Lesson02/>
      },
      {
        path:"/courses/grade10main/lesson03",
        element:<Lesson03/>
      },
      {
        path:"/courses/grade10main/lesson04",
        element:<Lesson04/>
      },
      {
        path:"/courses/grade10main/lesson05",
        element:<Lesson05/>
      },
      {
        path:"/courses/grade10main/lesson06",
        element:<Lesson06/>
      },
    ]
  },


  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },


]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div> 
    </div>
  )
}



export default App
