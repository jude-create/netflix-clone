import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext';
import Home from './Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path= '/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
     </Routes>

    </AuthContextProvider>
    
    </>
  );
}

export default App;
//6345a897c6bbf09929d6cd2a203cf635