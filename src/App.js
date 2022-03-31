
import './App.css';
import Header from './screens/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './screens/SignIn';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
    
  
    
  );
}

export default App;
