import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
