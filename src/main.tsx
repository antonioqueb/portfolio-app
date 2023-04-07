import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { selectIsDarkMode } from './reducers/darkmode/darkmodeSlices';
import { useSelector } from 'react-redux';
import './index.css';

//Pages
import Home from '../src/pages/Home/Home';
import Blog from '../src/pages/Blog/blog';
import PostDetail from '../src/pages/PostDetail/PostDetail';

//Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <div className={isDarkMode ? 'bg-dark' : 'light'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
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
