import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import Users from './Pages/Users';
import CreatePost from './Pages/Createpost';
import UserPost from './Pages/UserPost';
import Logout from './Pages/Logout';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import PostDetail from './Pages/PostDetail';
import Register from './Pages/Register';
import EditPost from './Pages/EditPost';
import CategoryPosts from './Pages/CategoryPosts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "users", element: <Users /> },
      { path: "create", element: <CreatePost /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "posts/users/:id", element: <UserPost /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
