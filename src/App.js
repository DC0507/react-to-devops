import logo from './logo.svg';
import './App.css';
import MyNavBar from './MyNavBar';
function App() {
  return (
    <div className="App">
      <MyNavBar></MyNavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is a change</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
