
import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
// import Regitration from "./Regitration";
import Login from "./Login";
import "./App.css"

function App() {

  return (
    <div className="App" >

      

      <div>
        
        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/register' element={<Regitration />} /> */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>


    </div>
  )
}




export default App;