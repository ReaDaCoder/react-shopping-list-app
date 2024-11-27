import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoute';
import Test from './pages/Test'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Test" element={<Test/>} />
        </Routes>
      </Router>
  
  );
}

export default App;














// import { useState } from 'react';
// import './App.css';
// import LoginPage from './pages/LoginPage';
// import RegistrationPage from './pages/RegistrationPage';
// import HomePage from './pages/HomePage';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import ProtectedRoutes from "./components/ProtectedRoute";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<LoginPage/>}/>
//           <Route element={<ProtectedRoutes/>}/>
//           <Route path="/RegistrationPage" element={<RegistrationPage/>} />
//           <Route element={<ProtectedRoutes/>}/>
//           <Route element={<HomePage/>} path="/HomePage"/>
//         </Routes>
//         </BrowserRouter>
//     </>
//   )
// }

// export default App
