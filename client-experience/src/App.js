
import './App.css';
import sunnyDay from './images/sunny-day.jpeg';
import coldDay from './images/cold-day.jpeg';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${coldDay})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type="text" name='city'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
