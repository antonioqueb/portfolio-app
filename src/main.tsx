import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { selectIsDarkMode } from './reducers/darkmode/darkmodeSlices';
import { useSelector } from 'react-redux';
import './index.css';

//Pages
import Home from '../src/pages/Home/Home';
import Blog from '../src/pages/Blog/blog';
import BlogDetail from '../src/pages/Blog/blogdetail';

//Components
import PreloaderDisplay from '../src/components/PreloaderDisplay/PreloaderDisplay';

//Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900); // Ajusta el tiempo de espera según sea necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isDarkMode ? 'bg-dark' : 'light'}>
      <BrowserRouter>
        {loading && <PreloaderDisplay />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogDetail />} />
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
