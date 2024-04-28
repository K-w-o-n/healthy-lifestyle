import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn.jsx";
import Register from "./Components/Register.jsx";
import Navbar from "./Components/Navbar.jsx";
// import p1 from "../../healthy-lifestyle/src/assets/images/hl.jpg";
// import ex from "../../healthy-lifestyle/src/assets/images/ex.jpg";
// import ex1 from "../../healthy-lifestyle/src/assets/images/ex1.png";

function App() {
  return (
    <div className="h-full w-full bg-my-image  bg-no-repeat bg-cover">
      <Navbar />
      <div className="flex w-full h-screen">
        <div className="w-full h-screen flex  items-center justify-center">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
