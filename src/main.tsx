import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { selectIsDarkMode } from './reducers/darkmode/darkmodeSlices';
import { useSelector } from 'react-redux';
import './index.css'; // Archivo CSS que contiene las definiciones de las clases bg-dark y light


//Pages
import Home from '../src/pages/Home/Home'
import Blog from '../src/pages/Blog/blog'


//Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

//Router
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>UPS... EROR 404</h1>
  },
  {
    path: '/blog',
    element: <Blog/>,
  },
]);

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <div className={isDarkMode ? 'bg-dark' : 'light'}> {/* Agrega la clase correspondiente */}
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
