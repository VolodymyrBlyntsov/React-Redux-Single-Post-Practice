import './App.css';
import Likes from './Likes';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="https://free4kwallpapers.com/uploads/originals/2019/12/24/surfing-wallpaper.jpg" alt="sea" />
            <Title />
            <Likes />
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
