import logo from './logo.svg';
import './App.css';
import LandingPage from './screens/LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
