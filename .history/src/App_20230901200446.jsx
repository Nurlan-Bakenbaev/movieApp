import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import  Home  from "./components/pages/Home";
import  SignUp  from "./components/pages/SignUp";
import  Login  from "./components/pages/Login";
import Account from './components/pages/Account'
import 

import { AuthContextProvider } from "./components/context/AuthContext.jsx";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account/" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
