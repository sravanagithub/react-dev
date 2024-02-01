
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
   <Routes>
  
         <Route exact path="/" element={<Login/>}></Route>
         <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
