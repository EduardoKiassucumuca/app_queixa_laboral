import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form_queixoso from './Pages/Queixoso';
import Home from './components/Home/home';
import Queixoso from './Pages/Queixoso/dados_queixoso';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/queixoso' element={<Form_queixoso/>}/>
        </Routes>
      </Router>
  );
}

export default App;
