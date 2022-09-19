import logo from './logo.svg';
import './App.css';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import { Route, Routes } from 'react-router';
import Sidebar from './components/pages/sidebar/Sidebar';
import Navbar from './components/pages/Navbar/Navbar';
import { Todo } from './components/pages/todo/todo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Register></Register> */}
      
      <Routes>
        <Route path='/' element={<Sidebar></Sidebar>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
