import logo from './logo.svg';
import './App.css';
import PersonInformation from'./components/PersonInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonInformation/>
      </header>
    </div>
  );
}

export default App;
