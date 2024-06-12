import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginUser from './components/LoginUser';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/" element={<LoginUser/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
