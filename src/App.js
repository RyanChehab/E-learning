import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Navigate to="/Login" />} />
        <Route path='/Signup' element = {<Signup />} />
        <Route path='/Login' element = {<Login />} />
      </Routes>
    </Router>
    
  );
}

export default App;
