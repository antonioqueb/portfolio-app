import { useSelector } from 'react-redux';
import { selectIsDarkMode } from './reducers/darkmode/darkmodeSlices';
import Home from '../src/pages/Home/Home';

const App: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <div className={isDarkMode ? 'bg-dark' : 'light'}>
      <Home />
    </div>
  );
};

export default App;
