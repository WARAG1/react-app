import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/5/5f/NAVI_Logo.svg/1163px-NAVI_Logo.svg.png' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Messages</a>
        </div>
        <div>
          <a href='#'>Music</a>
        </div>
      </nav>
      <div className='content'>

      </div>
    </div>
  );
}

export default App;
