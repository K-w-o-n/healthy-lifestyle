import React from 'react'
import { Routes, Route,} from "react-router-dom";
import SignIn from './Components/SignIn.jsx'
import Register from './Components/Register.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="flex w-full h-screen">
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
