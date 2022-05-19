import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path="/signUp" element={<SignUp />} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
