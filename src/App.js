import React from 'react'
import { Routes, Route,} from "react-router-dom";
import SignIn from './Components/SignIn.jsx'
import Register from './Components/Register.jsx'
// import Navbar from './Components/Navbar.jsx'
import p1 from "../../healthy-lifestyle/src/assets/images/hl.jpg"
import ex from "../../healthy-lifestyle/src/assets/images/ex.jpg"
import ex1 from "../../healthy-lifestyle/src/assets/images/ex1.png";

function App() {
  return (
    <div>
      
      <div className="flex max-w-[80] h-screen">
        <div className="hidden relative h-full w-1/2 md:flex">
          <img src={ex} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex  items-center justify-center lg:w-1/2">
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
