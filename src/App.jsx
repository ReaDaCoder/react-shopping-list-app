import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from "./components/ProtectedRoute";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route element={<ProtectedRoutes/>}/>
          <Route path="/RegistrationPage" element={<RegistrationPage/>} />
          <Route element={<ProtectedRoutes/>}/>
          <Route element={<HomePage/>} path="/HomePage"/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
