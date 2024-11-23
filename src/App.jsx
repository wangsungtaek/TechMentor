import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DosiSdk from "./pages/DosiSdk";
import Lbd from "./pages/Lbd";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MainHeader from "./components/common/MainHeader";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dosiSdk" element={<DosiSdk />} />
        <Route path="/lbd" element={<Lbd />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
