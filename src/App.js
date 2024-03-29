import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments'
import Spin from './Spin';
import { useSelector } from 'react-redux';

function App() {
  const error = useSelector(state => state.appReducer.error)
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="https://free4kwallpapers.com/uploads/originals/2019/12/24/surfing-wallpaper.jpg" alt="sea" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>  
    </div>
  );
}

export default App;
