import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import JournalEntry from './Components/JournalEntry/JournalEntry';
import Prompt from './Components/Prompt/Prompt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <RegisterForm />
        <JournalEntry />
        <Prompt />
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
