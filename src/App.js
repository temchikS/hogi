import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from './components/Reg';
import WelcomePage from './components/Welcome';
import LoginPage from './components/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/reg" element={<RegistrationPage/>}/>
        <Route path="/welcome" element={<WelcomePage/>}/>
      </Routes>
    </>

  );
}

export default App;
