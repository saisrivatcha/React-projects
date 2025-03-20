import './App.css';
import Obj from './components/assign1/Obj';
import Svg from './components/assign2/Svg';
import Products from './components/assign2.1/Products';
import Array from './components/assign3/Array';
import Form1 from './components/assign4/Form1';
import AddUser from './components/assign5/adduser/AddUser';
import AddUser1 from './components/assign5/usercount/AddUser1';
import Parent from './components/assign5\'1/Parent';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/assign6/RootLayout';
import Home from './components/assign6/Home';
import Signup from './components/assign8/Signup';
import Signin from './components/assign6/Signin';
import Technologies from './components/assign6/Technologies';
import Reactjs from './components/assign6/Reactjs';
import Angular from './components/assign6/Angular';
import Vue from './components/assign6/Vue';
import Login from './components/assign8/Login';
import LoginContext from './components/assign8/LoginContext';
import UserProfile from './components/assign8/UserProfile';


function App() {
  // Define routes BEFORE return statement
  const browserRouterObject = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "signup", element: <Signup /> },
        { path: "signin", element: <Signin /> },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            { path: "reactjs", element: <Reactjs /> },
            { path: "angular", element: <Angular /> },
            { path: "vue", element: <Vue /> },
            {path:"login",element:<Login/>},
            {path: "user-profile",element: <UserProfile />  }
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <Obj />
      <Svg />
      <Products />
      <Array />
      <Form1 />
      <AddUser />
      <AddUser1 />
      <Parent />
      
      {/* Provide router to the app */}
      <RouterProvider router={browserRouterObject} />
    </>
  );
}

export default App;
