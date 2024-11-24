import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DosiSdk from "./pages/DosiSdk";
import Lbd from "./pages/Lbd";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import Navigation from "./components/common/Navigation";
import Toolbar from "./components/common/Toolbar";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="App">
      <Toolbar onClickMenu={onClickMenu} />
      <div className="content_area">
        <Navigation isCollapsed={isCollapsed} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dosi-sdk" element={<DosiSdk />} />
          <Route path="/lbd" element={<Lbd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
