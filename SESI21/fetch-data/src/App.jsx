import logo from './logo.svg';
import './App.css';
import FetchComponent from './components/FetchComponent';
import RClockClass from './components/RealtimeClockClass';
import RClockFunction from './components/RealtimeClockFunction';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <FetchComponent/> */}
          <div>
            <RClockFunction />
          </div>
          <div>
            <RClockClass />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;