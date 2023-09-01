import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { AuthContextProvider } from "./components/context/AuthContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Account/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/" element={< />} />



        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
