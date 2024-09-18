import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import JournalEntry from './Components/JournalEntry/JournalEntry';
import Prompt from './Components/Prompt/Prompt';
import LoginPage from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homepage/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
