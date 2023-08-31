import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
function App() {
  return (
    <>
    <Auth></Auth>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
