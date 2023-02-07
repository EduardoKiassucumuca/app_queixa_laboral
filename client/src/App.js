import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Submeter_queixa from './components/Queixoso/submeter_queixa';
import Home from './components/Home/home';
import Queixoso from './Pages/Queixoso/dados_queixoso';
import Login from './components/Login/login';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/queixoso' element={<Submeter_queixa/>}/>
          <Route path='/Entrar' element={<Login/>}/>
        </Routes>
      </Router>
  );
}

export default App;
