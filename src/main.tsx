import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Navbar';
import { BlogsPage } from './pages/Blogs';
import { ApolloProvider } from '@apollo/client';
import { client } from './util/apollo-client';
import './main.css';
import { AboutPage } from './pages/About';
import { BlogPage } from './pages/Blog';
import { CreateBlogPage } from './pages/CreateBlog';
import { BlogEditPage } from './pages/BlogEdit';

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  children: [{
    path: '/blogs',
    element: <BlogsPage />
  },
  {
    path: '/blogs/new',
    element: <CreateBlogPage />
  },
  {
    path: '/blogs/:blogId',
    element: <BlogPage />
  },
  {
    path: '/blogs/:blogId/edit',
    element: <BlogEditPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  }]
}, {
  path: '*',
  element: <Navigate to="/blogs" />
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
